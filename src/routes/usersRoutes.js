const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../config/upload.js"); // crie a pasta middleware e o arquivo upload.js
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gerenciamento de users
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lista todos os usuarios
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filtro por nome
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get("/users", userController.getAllUsers);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               house_id:
 *                 type: integer
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: usuário criado
 */
router.post("/users", upload.single("image"), userController.createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Deleta um usuario
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: usuario deletado
 */
router.delete("/users/:id", userController.deleteUser);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Busca usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: usuario encontrado
 *       404:
 *         description: usuario não encontrado
 */
router.get("/users/:id", userController.getUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Atualiza um usuario
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               house_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: usuario atualizado
 */
router.put("/users/:id", userController.updateUser);

module.exports = router;