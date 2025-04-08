const userModel = require('../models/userModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getUsers();
        res.json(users);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar usuários." });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: "Error retrieving user" });
    }
};

const createUser = async (req, res) => {
    try {
        const {name, email} = req.body;
        const newUser = await userModel.createUser(name, email);
        res.status(201).json(newUser);
    } catch (error) {
        if (error.code === '23505') {
            return res.status(409).json({ message: "User already exists" });
        }
        res.status(500).json({ message: "Error creating user" });
    }
};

const updateUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const update = await userModel.updateUser(req.params.id, name, email);
        if (!update) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(update);
    } catch (error) {
        res.status(404).json({ message: "Error updating user" });
    }
};

const deleteUser = async (req, res) => {
    try {
        const message = await userModel.deleteUser(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(404).json({ message: "User not found" });
    }
};

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };
