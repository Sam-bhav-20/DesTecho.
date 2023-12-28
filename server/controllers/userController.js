const User = require('../model/userModel');
const bcrypt = require('bcrypt');

module.exports.register = async (req, res, next) => {
    try {
        // Extract data from request body
        const { username, emailId, password } = req.body;

        // Check if the username is already taken
        const checkUsername = await User.findOne({ username });
        if (checkUsername) {
            return res.json({ msg: 'Username not available', status: false });
        }

        // Check if the email is already in use
        const checkEmailId = await User.findOne({ emailId });
        if (checkEmailId) {
            return res.json({ msg: 'Email-Id already used', status: false });
        }

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 12);

        // Create a new user in the database
        const user = await User.create({
            emailId,
            username,
            password: hashPassword,
        });

        // Remove the password field from the user object before sending the response
        user.password = undefined;

        // Send a JSON response with the status and user information
        return res.json({ status: true, user });
    } catch (ex) {
        // Pass any errors to the next middleware
        next(ex);
    }
};