const express = require('express');
const router = express.Router();
const { test, createPost, getAllPosts, getSinglePost, deletePost, updatePost } = require('../controllers/post.controller');

router.get('/', test);
router.post('/createpost', createPost);
router.get('/getallposts', getAllPosts);
router.get('/getsinglepost', getSinglePost);
router.delete('/deletepost', deletePost);
router.put('/updatepost', updatePost);

module.exports = router;