const userModel = require("../models/userModel");

const getAllUsers = async (req, res) => {
    try {
        const { name } = req.query
        const users = await userModel.getUsers(name);
        res.json(users);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar usuários." });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }
        res.json(user);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar usuário." });
    }
};

const createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const image = req.file ? req.file.filename : null;
        const newUser = await userModel.createUser(name, email, age, image);
        res.status(201).json(newUser);
    } catch (error) {
        if (error.code === "23505") {
            return res.status(400).json({ message: "E-mail já cadastrado." });
        }
        res.status(404).json({ message: "Erro ao criar usuário." });
    }
};

const updateUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const updatedUser = await userModel.updateUser(req.params.id, name, email, age);
        if (!updatedUser) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: "Erro ao atualizar usuário." });
    }
};

const deleteUser = async (req, res) => {
    try {
        const message = await userModel.deleteUser(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(404).json({ message: "Erro ao deletar usuário." });
    }
};

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };