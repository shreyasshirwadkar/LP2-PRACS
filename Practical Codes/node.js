const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS
const PORT = 3000;

// API to fetch products
app.get("/products", (req, res) => {
    fs.readFile("products.json", "utf8", (err, data) => {
        if (err) {
            res.status(500).json({ error: "Error reading product data" });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
