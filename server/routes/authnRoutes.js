const router = require("express").Router();
const axios = require("axios");
const crypto = require("crypto");

const AUTHN_URL = process.env.AUTHN_URL;
const CLIENT_ID = process.env.AUTHN_CLIENT_ID;
const CLIENT_SECRET = process.env.AUTHN_CLIENT_SECRET;
const REDIRECT_URI = process.env.AUTHN_REDIRECT_URI;
const SCOPE = process.env.AUTHN_SCOPE || "user.profile";
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

// Step 1: Redirect user to AuthN OAuth2 authorize endpoint
router.get("/login", (req, res) => {
    const state = crypto.randomBytes(16).toString("hex");
    req.session.oauthState = state;

    const authUrl =
        `${AUTHN_URL}/oauth/authorize?` +
        `response_type=code&` +
        `client_id=${encodeURIComponent(CLIENT_ID)}&` +
        `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
        `scope=${encodeURIComponent(SCOPE)}&` +
        `state=${encodeURIComponent(state)}`;

    res.redirect(authUrl);
});

// Step 2: Handle OAuth2 callback — exchange code for token, fetch user details
const callbackHandler = async (req, res) => {
    const { code, state, error } = req.query;

    if (error) {
        console.error("AuthN OAuth error:", error);
        return res.redirect(`${FRONTEND_URL}/login?error=${encodeURIComponent(error)}`);
    }

    if (!code) {
        return res.redirect(`${FRONTEND_URL}/login?error=no_code`);
    }

    // Validate state to prevent CSRF
    if (state !== req.session.oauthState) {
        console.error("OAuth state mismatch");
        return res.redirect(`${FRONTEND_URL}/login?error=state_mismatch`);
    }

    try {
        // Exchange authorization code for access token
        const tokenResponse = await axios.post(
            `${AUTHN_URL}/v3/oauth/token`,
            new URLSearchParams({
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                grant_type: "authorization_code",
                code: code,
                redirect_uri: REDIRECT_URI,
            }).toString(),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        const { access_token, expires_in } = tokenResponse.data;

        // Fetch user details using the access token
        const userResponse = await axios.get(
            `${AUTHN_URL}/oauth/r/api/v1/user/details`,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );

        // Store user info and token in session
        req.session.authnUser = {
            ...userResponse.data,
            access_token,
            expires_in,
            loginMethod: "authn",
        };

        // Clear the OAuth state
        delete req.session.oauthState;

        // Redirect to frontend with success
        res.redirect(`${FRONTEND_URL}/authn/callback?success=true`);
    } catch (err) {
        console.error("AuthN token exchange error:", err.response?.data || err.message);
        res.redirect(
            `${FRONTEND_URL}/login?error=${encodeURIComponent(err.response?.data?.error || "token_exchange_failed")}`
        );
    }
};
router.get("/callback", callbackHandler);

// Step 3: Get current authenticated user from session
router.get("/user", (req, res) => {
    if (req.session.authnUser) {
        const { access_token, ...safeUser } = req.session.authnUser;
        return res.json({ status: true, user: safeUser });
    }
    return res.json({ status: false, msg: "Not authenticated" });
});

// Step 4: Logout — destroy session
router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Session destroy error:", err);
            return res.json({ status: false, msg: "Logout failed" });
        }
        res.clearCookie("connect.sid");
        return res.json({ status: true, msg: "Logged out successfully" });
    });
});

module.exports = router;
module.exports.callbackHandler = callbackHandler;
