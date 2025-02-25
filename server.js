require("dotenv").config();
const express = require("express");
const cors = require("cors");
const usersRoutes = require("./src/routes/usersRoutes");
const postRoutes = require("./src/routes/postRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', usersRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

