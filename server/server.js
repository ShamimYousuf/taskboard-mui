require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require("./middleware/logger")
const routes = require("./routes/index")
const connectDB = require("./config/db")


const app = express();
app.use(express.json());
app.use(cors());
app.use(logger)

app.use("/api", routes);

connectDB().then(() => {
    console.log("Database connection established, proceeding with app initialization")
}).catch((error) => {
    console.error("Failed to connect to the database:", error)
    })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


