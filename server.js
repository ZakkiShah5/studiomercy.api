require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const allBlogs = require('./routes/blogs')

// Express app
const app = express()


// Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes

app.use('/api/blogs', allBlogs);

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log('Connected and I am all ears!');
            console.log(port);
        })
    })
    .catch((err) => {
        console.log(err)
    })



