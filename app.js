require('dotenv').config(); // Certifique-se de carregar o dotenv primeiro
const express = require('express');
const connectDB = require('./config/db.config');

const app = express();

// Conectar ao banco de dados
connectDB();

// Outras configurações e middlewares...
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
