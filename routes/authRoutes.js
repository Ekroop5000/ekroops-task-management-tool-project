const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const path = require('path');
const router = express.Router();

// Login Route
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).sendFile(path.join(__dirname, '../public/login.html'), {
                message: 'Invalid username or password.',
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).sendFile(path.join(__dirname, '../public/login.html'), {
                message: 'Invalid username or password.',
            });
        }

        // Set cookie and redirect
        res.cookie('username', username, { httpOnly: true });
        res.redirect('/public/task_creation.html');
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Server error during login.');
    }
});

module.exports = router;