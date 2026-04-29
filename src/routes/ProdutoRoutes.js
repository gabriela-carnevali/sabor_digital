// ANALISA QUAL FUNÇÃO DO CRUD ELE PRECISA DIRECIONAR PARA O MÉTODO

const express = require('express')
const router = express.Router()

const ProdutoController = require('../controllers/ProdutoController')

// Router tem a capacidade de analisar as chamadas do protocolo HTTP
router.get('/', ProdutoController.listar)
router.get('/:id', ProdutoController.buscarPorId)
router.post('/', ProdutoController.cadastrar)
router.put('/:id', ProdutoController.atualizar)
router.delete('/:id', ProdutoController.deletar)