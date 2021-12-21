const Post = require('../models/postModel');

// GET /posts
exports.listAllPosts = (req, res) => {
    Post.find({}, (error, posts) => {
        if(error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        }
        else {
            res.status(200);
            res.json(posts)
        }
    });
}

// POST /posts
exports.createAPost = (req, res) => {
    let newPost = new Post(req.body);

    newPost.save((error, post) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        }
        else {
            res.status(201);
            res.json(post)
        }
    });
}
