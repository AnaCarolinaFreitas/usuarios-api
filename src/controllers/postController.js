const postModel = require("../models/postModel");

const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.getPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message: "Error found posts"});
    }
};

const getPost = async (req, res) => {
    try {
        const post = await postModel.getPostById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Error found post" });
    }
};

const createPost = async (req, res) => {
    try {
        const { user_id, image, description, add_person, localization } = req.body;
        const newPost = await postModel.createPost(user_id, image, description, add_person, localization);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: "Error creating post" });
    }
};

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { description, add_person } = req.body;
        const updatedPost = await postModel.updatePost(id, description, add_person);
        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: "Error updating post" });
    }
};

const deletePost = async (req, res) => {
    try {
        const deletedPost = await postModel.deletePost(req.params.id);
        res.status(200).json({ message: "Post deleted successfully", post: deletedPost });
    } catch (error) {
        res.status(404).json({ message: "Post not found" });
    }
};

module.exports = { getAllPosts, getPost, createPost, updatePost, deletePost };