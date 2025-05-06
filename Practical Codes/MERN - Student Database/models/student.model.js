const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    Name: String,
    RollNo: String,
    WAD: Number,
    CC: Number,
    DSBDA: Number,
    CNS: Number,
    AI: Number
});

module.exports = mongoose.model('Student', studentSchema);