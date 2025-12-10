const express = require("express");
const bodyParser = require("body-parser");
const shipmentRoutes = require("./routes/shipmentRoutes");
const swaggerConfig = require("./swagger");
const connectDB = require("./database");
require("dotenv").config();

const app = express();

// Middlewares
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use(shipmentRoutes);

// Swagger configuration
swaggerConfig(app);

// General Error Handler (catch-all)
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging

    // Check if the error has a status code, otherwise set a default of 500
    const statusCode = err.statusCode || 500;

    // Respond with the error message
    res.status(statusCode).json({
        message: err.message || "Internal Server Error",
    });
});

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () =>
    console.log(`Server running on port http://localhost:${PORT}`)
);
