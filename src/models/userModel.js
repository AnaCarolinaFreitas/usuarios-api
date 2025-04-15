const pool = require("../config/database");

const getUsers = async (name) => {
    if (!name) {
        const result = await pool.query(`SELECT users.*, posts.description AS postDescription, posts.add_person FROM users LEFT JOIN posts ON users.id = posts.user_id`);
        return result.rows;
    } else {
        const result = await pool.query(
            `SELECT users.*, posts.description AS postDescription, posts.add_person FROM users LEFT JOIN posts ON users.id = posts.user_id WHERE users.name ILIKE $1`, [`%${name}%`]
        );
        return result.rows;
    }
};

const getUserById = async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
};

const createUser = async (name, email, age, image) => {
    const result = await pool.query(
        "INSERT INTO users (name, email, age, image) VALUES ($1, $2, $3, $4) RETURNING *",
        [name, email, age, image]
    );
    return result.rows[0];
};

const updateUser = async (id, name, email, age) => {
    const result = await pool.query(
        "UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *",
        [name, email, age, id]
    );
    return result.rows[0];
};

const deleteUser = async (id) => {
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Usuário não encontrado." };
    }

    return { message: "Usuário deletado com sucesso." };
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };