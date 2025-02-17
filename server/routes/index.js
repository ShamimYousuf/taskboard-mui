const express = require("express");

const router = express.Router();

const taskRoutes =  require("./taskRoutes");
const healthRoutes = require("./healthRoutes");

router.use("/task", taskRoutes);

router.use("/health", healthRoutes );

module.exports = router