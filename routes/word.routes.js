const { Router } = require('express');
const router = Router();
const Word5 = require('../models/Words5.model.js');


router.get('/:word', async (req, res) => {
  const { word } = req.params 

  try {
    // Busca no banco de dados pela palavra
    const result = await Word5.findOne({ word })
    console.log(result)
    if (result) {
      console.log(result)
      return res.json({ message: 'Palavra encontrada!', data: result })
    } else {
      return res.status(404).json({ message: 'Palavra não encontrada.' })
    }
  } catch (error) {
    console.error('Erro ao pesquisar palavra:', error)
    return res.status(500).json({ error: 'Erro no servidor.' })
  }
})
module.exports = router
