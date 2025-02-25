const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get('/:userId', postsController.getPostsByUserId);
router.post('/:userId', postsController.addPostByUserId);
router.get('/:id', postsController.getPostById);
router.put('/:id', postsController.updatePostById);
router.delete('/:id', postsController.deletePostById);

module.exports = router;