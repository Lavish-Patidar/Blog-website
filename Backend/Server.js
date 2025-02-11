// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Add this line to load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Add this line to parse JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Post Schema
const postSchema = new mongoose.Schema({
    title: String,
    description: String,
});

const Post = mongoose.model('Post', postSchema);

// Routes
app.post('/api/posts', async (req, res) => {
    const { title, description } = req.body;
    const newPost = new Post({ title, description });
    await newPost.save();
    res.json(newPost);
});

app.get('/api/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});