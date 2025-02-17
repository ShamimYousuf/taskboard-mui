
const express = require("express");


const {createTask} = require("../controllers/taskFormController")

const router = express.Router();
router.post("/submit", createTask);

module.exports = router;