const User = require('../models/User');
const UserList = require('../models/UserList');
const list = new UserList();

list.addUser(new User('Ana Carolina', 'ana@gmail.com', 16));
list.addUser(new User('Laura', 'laura@gmail.com', 17));

const router = {
    getAllUsers: (req, res) => {
        res.json(list.getAllUsers());
    },

    getUserById: (req, res) => {
        try {
        res.json(list.getUserById(req.params.id));
    } catch (error) {
        res.status(404).json({message: 'User not found', error});
    }
},
    addUser: (req,res) => {
        try {
            const {name, email, age} = req.body;
            if(!name || !email || !age === undefined) {
                throw new Error('Missing required fields: name, email, age');
            }

            const newUser = new User(name, email, age);
            list.addUser(newUser);
            res.status(201).json(newUser);

        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },

    updateUser: (req, res) => {
        try {
            res.json(list.updateUserById(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({message: 'User not found', error});
        }
    },

    deleteUser: (req, res) => {
        list.deleteUserById(req.params.id);
        res.status(200).json({message: 'User deleted successfully', IdDeletado: req.params.id});
    }
};

module.exports = router;
