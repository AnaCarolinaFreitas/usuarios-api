const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

/**
 * @swagger
 * tags:
 *   name: posts
 *   description: Gerenciamento de publicações
 */

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Lista todas as publicações
 *     tags: [posts]
 *     responses:
 *       200:
 *         description: Lista de publicações
 */
router.get("/posts", postController.getAllPosts);

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Cria uma nova publicação
 *     tags: [posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               founder:
 *                 type: string
 *     responses:
 *       201:
 *         description: publicação criada
 */
router.post("/posts", postController.createPost);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Busca publicação por ID
 *     tags: [posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: publicação encontrada
 *       404:
 *         description: publicação não encontrada
 */
router.get("/posts/:id", postController.getPost);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Deleta uma publicação
 *     tags: [posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: publicação deletada
 */
router.delete("/posts/:id", postController.deletePost);

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Atualiza uma publicação
 *     tags: [posts]
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
 *               founder:
 *                 type: string
 *     responses:
 *       200:
 *         description: publicação atualizada
 */
router.put("/posts/:id", postController.updatePost);

module.exports = router;