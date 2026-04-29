//ANALISA QUAL DOMÍNIO (END POINT) ELE TEM QUE DIRECIONAR

const express = require('express')
const router = express.Router()

const produtoRoutes = require('./ProdutoRoutes')

router.get('/', (req, res) => {
    res.json({
        mensagem: "API SaborDigital", 
        versao: "1.0.0",
        arquitetura: "MVC + SOLID",
    })
})

// Acessar a rota dos produtos 
router.use('/produtos', produtoRoutes)