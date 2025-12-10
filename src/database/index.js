const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Disable logging (you can customize this further if needed)
            loggerLevel: "error", // Only log errors, suppress verbose logs
        });
        console.log("MongoDB connected");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
        setTimeout(connectDB, 5000); // Retry connection after 5 seconds
    }
};

module.exports = connectDB;
