const express = require('express');
const { addPost, getPosts, deletePost, getUserPosts } = require('../controllers/post');
const router = express.Router();

router.route('/post/new').post(addPost);
router.route('/posts').get(getPosts);
router.route('/post/:id').delete(deletePost);
router.route('/user/posts').get(getUserPosts);

module.exports = router;