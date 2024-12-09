const User = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Create and save user
        const user = new User({ username, email, password });
        await user.save();

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        if (error.code === 11000) {
            const field = Object.keys(error.keyValue)[0]; // e.g., username or email
            return res.status(400).json({
                error: `${field.charAt(0).toUpperCase() + field.slice(1)} is already in use.`,
            });
        }
        res.status(500).json({ error: 'Internal server error.' });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: 'Invalid username or password.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid username or password.' });
        }

        res.status(200).json({ message: 'Login successful!' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
    }
};