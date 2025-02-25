const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get('/:userId', postsController.getPostsByUserId);
router.post('/:userId', postsController.addPostByUserId);

module.exports = router;