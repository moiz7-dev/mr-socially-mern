const Post = require("../models/post");
const cloudinary = require("cloudinary");


exports.addPost = async (req, res) => {

    if(!req.body.postImage){
        return res.status(400).json({
            success: false,
            message: 'Image is required.'
        })
    }

    try {
        const upload = await cloudinary.v2.uploader.upload(req.body.postImage, {
            folder: 'posts'
        });

        const post = await Post.create({
            image: {
                public_id: upload.public_id,
                url: upload.secure_url
            },
            caption: req.body.caption
        });

        return res.json({
            success: true
        });
    }
    catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
    
}

exports.getPosts = async (req, res) => {

    try {
        const posts = await Post.find({}).sort({createdAt: -1});

        return res.json({
            success: true,
            posts
        });
    }
    catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
    
}

// user only
exports.getUserPosts = async (req, res) => {

    try {
        const posts = await Post.find({userId}).sort({createdAt: -1});

        return res.json({
            success: true,
            posts
        });
    }
    catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
    
}

exports.deletePost = async (req, res) => {
    const {id} = req.params;

    if(!id){
        return res.status(400).json({
            success: false,
            message: 'Post ID is required!'
        });
    }

    try {
        const post = await Post.findByIdAndDelete(id);

        if(!post){
            return res.status(500).json({
                success: false,
                message: 'Post ID is invalid or deleted already'
            });
        }

        return res.json({
            success: true,
        });
    }
    catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
    
}