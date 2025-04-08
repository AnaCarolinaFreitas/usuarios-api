const postModel = require("../models/postModel");

const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.getAllPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message: "Error retrieving posts"});
    }
};

const getPost = async (req, res) => {
    try {
        const post = await postModel.getPostById(req.params.id);
        if (!post) {
            return res.status(404).json({message: "Post not found"});
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({message: "Error retrieving post"});
    }   
};

const createPost = async (req, res) => {
    try {
        const { usuario_id, image, description } = req.body;
        const newPost = await postModel.createPost(usuario_id, image, description);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({message: "Error creating post"});
    }
};

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { usuario_id, image, description } = req.body;
        const updatedPost = await postModel.updatePost(id, usuario_id, image, description);
        if (!updatedPost) {
            return res.status(404).json({message: "Post not found"});
        }
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({message: "Error updating post"});
    }
};

const deletePost = async (req, res) => {
    try {
        const deletePost = await postModel.deletePost(req.params.id);
        res.status(200).json(deletePost);
    } catch (error) {
        res.status(404).json({message: "Post not found"});
    }
};

module.exports = { getAllPosts, getPost, createPost, updatePost, deletePost };


