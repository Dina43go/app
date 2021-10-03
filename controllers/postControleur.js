const Post = require('../models/Posts');

exports.getAllPost = async (req, res, next) => {
    try {
        let [resTest] = await Post.getAllPost()
        console.log(resTest);
        res.status(201).json({allposts : resTest});
        Post.closeDB();

    } catch (e) {
        console.error(e.message);
        next(e);
    }
}

exports.getNewPost = async (req, res, next) => {

    console.log(req.body.tags)
    if(req.body.tags === "flutter") {
              
    } else {
        if(req.body.titre.length > 3) {
            try {
                let post = new Post(req.body.titre , req.body.post_message);
                let [result,_] = await post.savePost();
                res.status(201).json(result);
                
            } catch (e) {
                console.error(e.message);
                next(e);
            }
        } else {
            res.status(201).json({message : "le titre est trop long"})
        } 
    }

}
exports.getPostById = async (req, res, next) => {
    try {
        let [postId,_] = await Post.getPostId(req.params.id)
        res.status(201).json({postId:postId[0]});
    } catch (e) {
        console.error(e.message);
        next(e);
    }
}