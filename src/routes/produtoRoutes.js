const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');
const uploadConfig = require('../config/multer')

router.get('/', ProdutoController.listar);
router.get('/:id', ProdutoController.buscarPorId);
router.post('/', uploadConfig.single('imagem'), ProdutoController.cadastrar);
router.put('/:id', uploadConfig.single('imagem'), ProdutoController.atualizar);
router.delete('/:id', uploadConfig.single('imagem'), ProdutoController.deletar);

module.exports = router;
