require("dotenv").config();
const express = require("express");
const cors = require("cors");
const usersRoutes = require("./src/routes/usersRoutes");
const postRoutes = require("./src/routes/postRoutes");
const reportRoutes = require("./src/routes/reportRoutes");
const setupSwagger = require('./src/config/swagger'); // Swagger aqui


const app = express();
app.use(cors());
app.use(express.json());
setupSwagger(app); // Ativa o Swagger

app.use('/api', usersRoutes);
app.use('/api', postRoutes);
app.use('/', reportRoutes)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});

