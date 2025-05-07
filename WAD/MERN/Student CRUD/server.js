const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/student", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
const studentSchema = new mongoose.Schema({
  name: String,
  roll_no: Number,
  WAD_Marks: Number,
  DSBDA_Marks: Number,
  CNS_Marks: Number,
  CC_Marks: Number,
  AI_Marks: Number,
});
const Student = mongoose.model("Student", studentSchema);
// Create
app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read all
app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Read by filter (e.g., DSBDA > 20)
app.get("/students/filter", async (req, res) => {
  const students = await Student.find({ DSBDA_Marks: { $gt: 20 } });
  res.json(students);
});

// Update marks (e.g., increment WAD_Marks)
app.put("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete student
app.delete("/students/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
