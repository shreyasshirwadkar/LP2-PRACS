const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/music', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Import the Song model
const Song = require('./models/song.model');

// Routes
app.get('/', async (req, res) => {
    const songs = await Song.find();
    const count = await Song.countDocuments();
    res.render('index', { songs, count, filter: {} }); // Pass an empty object for filter
});

app.post('/songs', async (req, res) => {
    const newSong = new Song(req.body);
    await newSong.save();
    res.redirect('/');
});

app.get('/songs/filter', async (req, res) => {
    const { film, music_director, singer } = req.query;
    const query = {};
    if (film) query.film = film;
    if (music_director) query.music_director = music_director;
    if (singer) query.singer = singer;
    const songs = await Song.find(query);
    const count = await Song.countDocuments(query);
    res.render('index', { songs, count, filter: req.query });
});

app.post('/songs/:id/delete', async (req, res) => {
    await Song.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});