const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    caption: {
        type: String
    },
    comments: [{
        comment: {
            type: mongoose.Schema.ObjectId,
            ref: 'Comment',
            required: true
        }
    }]
});

module.exports = mongoose.model('Post', postSchema);