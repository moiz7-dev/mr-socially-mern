const express = require('express');
const { addPost } = require('../controllers/post');
const router = express.Router();

router.route('/post/new').post(addPost)

module.exports = router;