const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get("/users", usersController.getAllUsers);
router.post("/users", usersController.createUser);
router.delete("/users/:id", usersController.deleteUser);
router.get("/users/:id", usersController.getUser);
router.put("/users/:id", usersController.updateUser);

module.exports = router;