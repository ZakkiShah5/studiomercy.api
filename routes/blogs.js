const express = require('express')
const {createBlog, getBlog, getBlogs, delBlog, updateBlog} = require('../controllers/blogControllers')

const router = express.Router()

// Get all blogs
router.get('/', getBlogs)
// Get a single blog
router.get('/:id', getBlog)
// Post a blog
router.post('/', createBlog)
// Delete a blog

router.delete('/:id', delBlog)
// Update a blog

router.patch('/:id',updateBlog)

module.exports = router