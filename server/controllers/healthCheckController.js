const mongoose = require('mongoose')

exports.healthCheck = async (req, res) => {

    console.log("HealthCheck is hitted");
    const serverStatus = 'OK'
    let dbStatus = 'Disconnected'

    if (mongoose.connection.readyState === 1) {
        dbStatus = 'Connected';
    } else if (mongoose.connection.readyState === 2) {
        dbStatus = 'Connecting'
    }

    if (serverStatus === 'OK' && dbStatus === 'Connected') {
        res.status(200).json({
            server: serverStatus,
            database: dbStatus,
            timStamp: new Date().toISOString(),
        })
    }else{
        res.status(500).json({
            server: serverStatus,
            database: dbStatus,
            timStamp: new Date().toISOString(),
        })
    }

}