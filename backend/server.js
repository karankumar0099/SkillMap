const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());



mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
    family: 4
})
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => console.log("MongoDB Error:", err));

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
