require('dotenv').config() 
const { TextEncoder, TextDecoder } = require('util')
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

const cors = require('cors')


const express = require('express')
const mongoose = require('mongoose')
const Word5 = require('./models/Words5.model') 
const app = express()
app.use(express.json()) 
/*/app.use((req,res,next)=>{
    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Origin", 'GET,PUT,DELETE,POST')
    app.use(cors());
    next();
})*/
//mongoose.set('strictQuery', true)
app.use(cors())

app.use('/', require('./routes/word.routes'))
app.get('/meu-ip', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  res.send(`IP do cliente: ${ip}`)
})
// Conectar ao MongoDB e iniciar o servidor
const startServer = async () => {
  try {
    const MONGO_CONNECTION_STRING ='mongodb+srv://admin:admin@letrix.yyas9by.mongodb.net/Letrix' // String de conexão
    await mongoose.connect(MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Conectado ao MongoDB.')

    /*const PORT = process.env.PORT || 3000 // Vercel fornece a porta via process.env.PORT
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}.`)
    })*/

  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error)
    process.exit(1) // Encerra o processo se a conexão falhar
  }
}
startServer()
app.listen(process.env.PORT,()=>{
    console.log(`Server running on ${process.env.PORT}`)
})
