const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer')

cloudinary.config({

  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,

})

const storage = new CloudinaryStorage({

  cloudinary,
  params: {
    folder: 'ironBookDatabase',
    resource_type:'image'
  }

})

const uploadCloud = multer({ storage })

module.exports = uploadCloud
[
  {
    "marca": "Chevrolet",
    "modelo": "Onix",
    "ano_fabricacao": 2019,
    "cor": "Vermelho",
    "tipo": "Hatch",
    "quilometragem": 22000,
    "num_portas": 4,
    "imagem": "https://example.com/onix.jpg"
  },
  {
    "marca": "Hyundai",
    "modelo": "Creta",
    "ano_fabricacao": 2020,
    "cor": "Prata",
    "tipo": "SUV",
    "quilometragem": 18000,
    "num_portas": 4,
    "imagem": "https://example.com/creta.jpg"
  },
  {
    "marca": "Jeep",
    "modelo": "Compass",
    "ano_fabricacao": 2022,
    "cor": "Cinza",
    "tipo": "SUV",
    "quilometragem": 8000,
    "num_portas": 4,
    "imagem": "https://example.com/compass.jpg"
  },
  {
    "marca": "Renault",
    "modelo": "Duster",
    "ano_fabricacao": 2018,
    "cor": "Branco",
    "tipo": "SUV",
    "quilometragem": 35000,
    "num_portas": 4,
    "imagem": "https://example.com/duster.jpg"
  },
  {
    "marca": "Fiat",
    "modelo": "Argo",
    "ano_fabricacao": 2021,
    "cor": "Vermelho",
    "tipo": "Hatch",
    "quilometragem": 12000,
    "num_portas": 4,
    "imagem": "https://example.com/argo.jpg"
  },
  {
    "marca": "Nissan",
    "modelo": "Kicks",
    "ano_fabricacao": 2020,
    "cor": "Preto",
    "tipo": "SUV",
    "quilometragem": 20000,
    "num_portas": 4,
    "imagem": "https://example.com/kicks.jpg"
  },
  {
    "marca": "Chevrolet",
    "modelo": "Tracker",
    "ano_fabricacao": 2021,
    "cor": "Prata",
    "tipo": "SUV",
    "quilometragem": 11000,
    "num_portas": 4,
    "imagem": "https://example.com/tracker.jpg"
  },
  {
    "marca": "Toyota",
    "modelo": "Hilux",
    "ano_fabricacao": 2019,
    "cor": "Branco",
    "tipo": "Picape",
    "quilometragem": 40000,
    "num_portas": 4,
    "imagem": "https://example.com/hilux.jpg"
  },
  {
    "marca": "Ford",
    "modelo": "Ka",
    "ano_fabricacao": 2018,
    "cor": "Preto",
    "tipo": "Hatch",
    "quilometragem": 30000,
    "num_portas": 4,
    "imagem": "https://example.com/ka.jpg"
  },
  {
    "marca": "Honda",
    "modelo": "HR-V",
    "ano_fabricacao": 2021,
    "cor": "Cinza",
    "tipo": "SUV",
    "quilometragem": 14000,
    "num_portas": 4,
    "imagem": "https://example.com/hrv.jpg"
  },
  {
    "marca": "Jeep",
    "modelo": "Renegade",
    "ano_fabricacao": 2020,
    "cor": "Azul",
    "tipo": "SUV",
    "quilometragem": 19000,
    "num_portas": 4,
    "imagem": "https://example.com/renegade.jpg"
  },
  {
    "marca": "Volkswagen",
    "modelo": "T-Cross",
    "ano_fabricacao": 2022,
    "cor": "Preto",
    "tipo": "SUV",
    "quilometragem": 5000,
    "num_portas": 4,
    "imagem": "https://example.com/tcross.jpg"
  },
  {
    "marca": "Hyundai",
    "modelo": "HB20",
    "ano_fabricacao": 2019,
    "cor": "Branco",
    "tipo": "Hatch",
    "quilometragem": 27000,
    "num_portas": 4,
    "imagem": "https://example.com/hb20.jpg"
  },
  {
    "marca": "Chevrolet",
    "modelo": "Spin",
    "ano_fabricacao": 2018,
    "cor": "Prata",
    "tipo": "Minivan",
    "quilometragem": 45000,
    "num_portas": 4,
    "imagem": "https://example.com/spin.jpg"
  },
  {
    "marca": "Renault",
    "modelo": "Sandero",
    "ano_fabricacao": 2020,
    "cor": "Vermelho",
    "tipo": "Hatch",
    "quilometragem": 20000,
    "num_portas": 4,
    "imagem": "https://example.com/sandero.jpg"
  },
  {
    "marca": "Fiat",
    "modelo": "Toro",
    "ano_fabricacao": 2021,
    "cor": "Cinza",
    "tipo": "Picape",
    "quilometragem": 10000,
    "num_portas": 4,
    "imagem": "https://example.com/toro.jpg"
  }
]
