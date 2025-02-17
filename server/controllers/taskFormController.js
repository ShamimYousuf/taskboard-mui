const TaskFormModel = require('../models/TaskForm')


exports.createTask = async (req, res) => {

    console.log("createTask is hitted");

    try {
        const newTask = new TaskFormModel(req.body);
        await newTask.save();
        res.status(201).json({message: "Data saved successfully"})
    } catch (e) {

        console.log('err', e)

        res.status(500).json({ message: "Failed to dave data"})
    }
}
