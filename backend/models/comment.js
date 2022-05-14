const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    postId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Post',
        required: true
    }
});

module.exports = mongoose.model('Comment', commentSchema);