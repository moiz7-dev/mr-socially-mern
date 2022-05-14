const Comment = require("../models/comment");
const Post = require("../models/post");

exports.addComment = async (req, res) => {
    
    const { message, username, postId } = req.body;

    if(!message) {
        return res.status(400).json({
            success: false,
            message: 'Comment is empty!'
        });
    }
    
    try {

        const isPostExist = await Post.findById(postId);

        if(!isPostExist){
            return res.status(400).json({
                success: false,
                message: 'Post is deleted or invalid post ID!'
            });
        }

        await Comment.create({
            message,
            username,
            post: postId
        });

        return res.json({
            success: true,
        });

    } catch(error) {
        
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }

}

exports.getComments = async (req, res) => {
    
    try {

        const comments = await Comment.find({postId: req.query.postId});

        return res.json({
            success: true,
            comments
        });

    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }

}

exports.deleteComment = async (req, res) => {
    const {id} = req.params;
    
    if(!id){
        return res.status(400).json({
            success: false,
            message: 'Comment ID is required!'
        });
    }

    try {

        const comment = await Comment.findByIdAndDelete(id);

        if(!comment){
            return res.status(400).json({
                success: false,
                message: 'Comment ID is invalid or deleted already.'
            });
        }

        return res.json({
            success: true,
        });

    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }

}