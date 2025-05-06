const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static("public"));
app.use(express.json());

const file = "taskList.json";

//READ
app.get("/tasks", (req, res) => {
  fs.readFile(file, "utf-8", (err, data) => {
    res.json(err ? [] : JSON.parse(data));
  });
});

app.post("/tasks", (req, res) => {
  fs.writeFile(file, JSON.stringify(req.body), (err) => {
    res.json({ success: !err });
  });
});

app.listen(3000, () => {
  console.log("Server running on Port 3000");
});
