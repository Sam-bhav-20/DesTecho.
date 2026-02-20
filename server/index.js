require("dotenv").config();
const express = require("express")
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());

// Session middleware (required by authn-user SDK)
app.use(session({
    secret: process.env.SESSION_SECRET || 'destecho-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
    },
}));

// Initialize AuthN SDK
const authn = require("authn-user")({
    clientId: process.env.AUTHN_CLIENT_ID,
    clientSecret: process.env.AUTHN_CLIENT_SECRET,
    authnUrl: process.env.AUTHN_URL,
    serviceUrl: process.env.SERVICE_URL || "http://localhost:8080",
    callbackUrl: "/login_callback",
    logoutUrl: "/logout",
    authEnabled: true,
});
// Custom logout: destroy local session, then redirect to AuthN logout
app.get("/api/auth/authn/logout", (req, res) => {
    const authnUrl = process.env.AUTHN_URL;
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
    req.session.destroy((err) => {
        if (err) console.error("Session destroy error:", err);
        res.clearCookie("connect.sid");
        res.redirect(`${frontendUrl}/login`);
    });
});

app.use(authn.callbackFilter);
app.use(authn.logoutFilter);
// SDK middleware: protect all routes — redirect unauthenticated users to AuthN
app.use(authn.ensureAuthentictionFilter.unless({
    path: [
        '/api/auth/login',
        '/api/auth/register',
        '/api/auth/logout',
        '/api/auth/authn/user',
        '/api/auth/authn/logout',
    ]
}));

if (process.env.MONGO_URL) {
    mongoose.connect(process.env.MONGO_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("Database Connected");
    })
    .catch((err)=>{
        console.log("MongoDb connection error",err);
    })
} else {
    console.log("MONGO_URL not set — skipping MongoDB connection. Local auth (register/login) won't work, but AuthN SSO will.");
}

app.use("/api/auth",userRoutes);

// AuthN login trigger — SDK's ensureAuthentictionFilter redirects unauthenticated users to AuthN.
// Once authenticated, user lands here and gets redirected to the frontend.
app.get("/api/auth/authn/login", (req, res) => {
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
    res.redirect(`${frontendUrl}/authn/callback?success=true`);
});

// API to get current AuthN user from session (SDK stores user in req.session.user)
app.get("/api/auth/authn/user", (req, res) => {
    if (req.session && req.session.user) {
        return res.json({ status: true, user: req.session.user });
    }
    return res.json({ status: false, msg: "Not authenticated" });
});

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server started on Port ${process.env.PORT}`)
})