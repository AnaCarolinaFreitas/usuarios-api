const User = require("../models/User")
const Post = require("../models/Post")
const PostList = require("../models/PostList");
const list = new PostList()


const router = {
    addPostByUserId: (req,res) => {
        try {
            const {title, content, image, UserId} = req.body;

            const newPost = new Post({title, content, image, UserId});

            list.addPostByUserId(newPost);
            res.status(201).json(newPost);
            if(!title || !content || !UserId === undefined) {
                throw new Error('Title, content and UserId are required');
            }

        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },

    getPostsByUserId: (req, res) => {
        try {
            const userId = req.params.id;
            const userPosts = list.getPostsByUserId(userId);
            if (userPosts.length === 0) {
                throw new Error('No posts found for this user');
            }
            res.json(userPosts);
        } catch (error) {
            res.status(404).json({message: 'Posts for this user not found', error});
        }
    },

};

module.exports = router;


