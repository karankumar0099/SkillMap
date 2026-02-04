const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());



// MongoDB Connection for Serverless (Caching to prevent cold start delays)
let cachedDb = null;

const connectDB = async () => {
    if (cachedDb) {
        return cachedDb;
    }

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 50000, // Increased timeout
            family: 4
        });
        console.log("MongoDB Connected Successfully");
        cachedDb = conn;
        return conn;
    } catch (err) {
        console.error("MongoDB Error:", err);
        throw err;
    }
};

// Ensure connection before handling requests
app.use(async (req, res, next) => {
    // Only connect if it's an API request that needs DB (or just globally for simplicity)
    if (mongoose.connection.readyState === 1) {
        return next();
    }
    await connectDB();
    next();
});

app.use("/api/contact", require("./routes/contactRoute"));
app.use("/api/ai", require("./routes/aiRoute"));

app.get("/", (req, res) => {
    res.send("Server is running");
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}

module.exports = app;
