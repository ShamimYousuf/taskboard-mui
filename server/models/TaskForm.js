const mongoose = require('mongoose');

const TaskFormSchema = new mongoose.Schema({
    taskID: { type: String, required: true, unique: true },
    title: { type: String, required: true, trim:true},
    epic: { type: String, default: "General"},
    priority: {type: Number, required: true, min:1, max:5},
    assignee: { type: String, required: true, trim: true},
    status: {
        type: String,
        enum: [ "To Do", "In Progress", "Done" ],
        default: "To Do"
    },
});

module.exports = mongoose.model("Form", TaskFormSchema);