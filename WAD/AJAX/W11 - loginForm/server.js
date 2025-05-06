const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); 
app.use(express.static("public"));

// Register endpoint
app.post("/register", (req, res) => {
  const user = req.body;

  // Read current users
  let users = [];
  if (fs.existsSync("users.json")) {
    const data = fs.readFileSync("users.json", "utf-8");
    if (data) users = JSON.parse(data); // ✅ Avoid empty file error
  }

  // Check if user already exists
  if (users.find((u) => u.email === user.email)) {
    return res.status(400).json({ error: "Email already registered" });
  }

  users.push(user);
  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
  res.json({ message: "Registration successful" });
});

// Login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  let users = [];
  if (fs.existsSync("users.json")) {
    const data = fs.readFileSync("users.json", "utf-8");
    if (data) users = JSON.parse(data); // ✅ Avoid empty file error
  }

  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

app.get("/users", (req, res) => {
  let users = [];
  if (fs.existsSync("users.json")) {
    const data = fs.readFileSync("users.json", "utf-8");
    users = JSON.parse(data);
  }
  res.json({ users });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
