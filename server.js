require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const allBlogs = require('./routes/blogs');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'https://studiomercy.neocities.org', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/blogs', allBlogs);

// Connect to MongoDB
mongoose.connect('mongodb+srv://studioMercy:51214722@studiomercy.ghbxl4m.mongodb.net/?retryWrites=true&w=majority&appName=StudioMercy', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    // Start server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
