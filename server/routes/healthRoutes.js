const express = require('express')
const router = express.Router();


const { healthCheck } = require('../controllers/healthCheckController');

router.get("/check", healthCheck);

module.exports = router;

