const express = require('express');
const router = express.Router();
const { addComment, getComments, deleteComment } = require('../controllers/comment');

router.route('/comment/add').post(addComment);
router.route('/comments').get(getComments);
router.route('/comment/:id').delete(deleteComment);

module.exports = router;