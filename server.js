const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const taskRoutes = require('./routes/taskRoutes');
const Task = require('./models/Task');
const User = require('./models/User');

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Support form submissions
app.use(cookieParser());
app.use(express.static('public'));

// Serve static files
app.use('/public', express.static('public'));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('MongoDB connection error:', error));

// Root Route - Redirect to Sign-Up Page by Default
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/sign_up.html');
});

// Sign-Up Route
app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });

        await user.save();
        res.redirect('/public/login.html'); // Redirect to login page after successful sign-up
    } catch (error) {
        console.error('Error during sign-up:', error);
        res.status(500).json({ error: 'Server error during sign-up' });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).send('Invalid username or password.');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid username or password.');
        }

        // Set cookie and redirect
        res.cookie('username', username, { httpOnly: true });
        res.redirect('/public/task_creation.html');
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Server error during login' });
    }
});

// Check Task Existence Route
app.get('/api/tasks/exist', async (req, res) => {
    try {
        const taskCount = await Task.countDocuments(); // Counts documents in the tasks collection
        res.json({ tasksExist: taskCount > 0 }); // Responds with true if tasks exist, otherwise false
    } catch (error) {
        console.error('Error checking task existence:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Display All Tasks Page
app.get('/tasks', (req, res) => {
    res.sendFile(__dirname + '/public/task_display.html');
});

// Prefix API routes with /api
app.use('/api', taskRoutes);

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});