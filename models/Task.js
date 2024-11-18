// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
    priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Medium' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', taskSchema);
