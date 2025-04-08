const pool = require("../config/database");

const getAllPosts = async () => {
    const result = await pool.query("SELECT * AS usuario FROM posts  FROM posts LEFT JOIN users ON posts.usuario_id = users.id");
    return result.rows;
};

const getPostById = async (id) => {
    const result = await pool.query("SELECT * AS usuarios FROM posts LEFT JOIN users ON posts.usuario_id = users.id WHERE posts.id = $1", [id]);
    return result.rows[0];
};

const createPost = async (usuario_id, image, description) => {
    const result = await pool.query("INSERT INTO posts (usuario_id, image, description) VALUES ($1, $2, $3) RETURNING *", [usuario_id, image, description]);  
    return result.rows[0];
}

const updatePost = async (id, usuario_id, image, description) => {
    const result = await pool.query("UPDATE posts SET usuario_id = $1, image = $2, description = $3 WHERE id = $4 RETURNING *", [usuario_id, image, description, id]);
    return result.rows[0];
}

const deletePost = async (id) => {
    const result = await pool.query("DELETE FROM posts WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
        throw new Error("Post not found");
    }
    return result.rows[0];
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };

