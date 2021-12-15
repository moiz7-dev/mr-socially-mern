const Post = require("../models/post")


exports.addPost = (req, res) => {

    console.log(req.files);

    return res.json(req.body)
    
    // try {
    //     const post = await Post.create({
            
    //     })
    // }   
    // catch(error) {
    //     res.status('500').json({
    //         success: false,
    //         message: error.message
    //     })
    // }
    
}