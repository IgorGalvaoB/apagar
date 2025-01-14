require('dotenv').config(); // Certifique-se de carregar o dotenv primeiro
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const cors = require('cors');


const express = require('express');
const mongoose = require('mongoose');
const Word5 = require('./Words5.model'); // Importa o modelo corretamente
const app = express();
app.use(express.json()); // Para tratar JSON no body
app.use(cors());
mongoose.set('strictQuery', true);

// Rota para buscar uma palavra no banco de dados
app.get('/:word', async (req, res) => {
  const { word } = req.params; // Obtém a palavra do parâmetro da rota

  try {
    // Busca no banco de dados pela palavra
    const result = await Word5.findOne({ word });
    console.log(result)
    if (result) {
      console.log(result)
      return res.json({ message: 'Palavra encontrada!', data: result });
    } else {
      return res.status(404).json({ message: 'Palavra não encontrada.' });
    }
  } catch (error) {
    console.error('Erro ao pesquisar palavra:', error);
    return res.status(500).json({ error: 'Erro no servidor.' });
  }
});
app.get('/meu-ip', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.send(`IP do cliente: ${ip}`);
});
// Conectar ao MongoDB e iniciar o servidor
const startServer = async () => {
  try {
    const MONGO_CONNECTION_STRING ='mongodb+srv://admin:admin@letrix.yyas9by.mongodb.net/Letrix'; // String de conexão
    await mongoose.connect(MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao MongoDB.');

    const PORT = process.env.PORT || 3000; // Vercel fornece a porta via process.env.PORT
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}.`);
    });

  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1); // Encerra o processo se a conexão falhar
  }
};

// Inicia o servidor
startServer();
