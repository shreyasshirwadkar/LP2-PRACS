const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/student', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Import the Student model
const Student = require('./models/student.model');

// Routes
app.get('/', async (req, res) => {
    const students = await Student.find();
    const count = await Student.countDocuments();
    res.render('index', { students, count, filter: {} }); // Pass an empty object for filter
});

app.post('/students', async (req, res) => {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.redirect('/');
});

app.get('/students/filter', async (req, res) => {
    const { subject, min, max } = req.query;
    const query = {};
    if (subject && min && max) {
        query[subject] = { $gte: min, $lte: max };
    }
    const students = await Student.find(query);
    const count = await Student.countDocuments(query);
    res.render('index', { students, count, filter: req.query });
});

app.get('/students/:id/edit', async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.render('edit', { student });
});

app.post('/students/:id/update', async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
});

app.post('/students/:id/delete', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});