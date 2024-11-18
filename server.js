const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const Task = require('./models/Task');

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Serve static files from the 'public' directory
app.use('/public', express.static('public'));

// Root Route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/task_creation.html');
});

// Route to display tasks
app.get('/tasks', (req, res) => {
    res.sendFile(__dirname + '/public/task_display.html');
});

// New route to check if tasks exist in the database
app.get('/api/tasks/exist', async (req, res) => {
    try {
        const taskCount = await Task.countDocuments(); // Counts documents in the tasks collection
        res.json({ tasksExist: taskCount > 0 }); // Responds with true if tasks exist, otherwise false
    } catch (error) {
        console.error('Error checking task existence:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('MongoDB connection error:', error));

// Prefix API routes with /api
app.use('/api', taskRoutes);

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});
