const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/posts", postController.getAllPosts);
router.post("/posts", postController.createPost);
router.get("/posts/:id", postController.getPost);
router.delete("/posts/:id", postController.deletePost);
router.put("/posts/:id", postController.updatePost);

module.exports = router;