const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get("/posts", postsController.getAllPosts);
router.post("/posts", postsController.createPost);
router.get("/posts/:id", postsController.getPost);
router.delete("/posts/:id", postsController.deletePost);
router.put("/posts/:id", postsController.updatePost);

module.exports = router;