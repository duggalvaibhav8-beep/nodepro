const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/api", (req, res) => {
    res.json({
        message: "Hello from Node.js Backend 🚀",
        status: "success"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});