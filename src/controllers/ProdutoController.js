const produtoService = require('../services/ProdutoService')

// ProdutoRoutes acessa essa class para encontrar o método que foi pedido pelo FRONT ao APP.JS ao INDEX.JS ao PRODUTOROUTES e chega aqui
class ProdutoController {
    async listar(req, res) {
        try {
            const resultado = await produtoService.listarProdutos()
            res.json(resultado)

        } catch (erro) {
            res.status(500).json({
                sucesso: false,
                mensagem: erro.mensagem || "Erro interno do servidor",
                erro: erro
            })
        }
    }
    // Nome do async remete ao ProdutoRoutes, para que ela possa encontrar o método
    async buscarPorId(req, res) {
        try {
            const resultado = await produtoService.buscarProdutoPorId(req.params.id) //Esse buscarProdutoPorId remete à ProdutoService, que irá criar o método no arquivo
            res.json(resultado)

        } catch (erro) {
            res.status(500).json({
                sucesso: false, 
                mensagem: erro.mensagem || "Erro interno do servidor",
                erro: erro
            })
        }
    }

    async cadastrar(req,res) {
        try {
            const resultado = await produtoService.cadastrarProduto(req.body)
            res.status(201).json(resultado)
        } catch (erro) {
            res.status(500).json({
                sucesso: false, 
                mensagem: erro.mensagem || "Erro interno do servidor",
                erro: erro
            })
        }
    }

    async atualizar(req, res){
        try {
            const resultado = await produtoService.atualizarProduto(req.params.id, req.body)
            res.status(200).json(resultado)
        } catch (erro) {
            res.status(500).json({
                sucesso: false, 
                mensagem: erro.mensagem || "Erro interno do servidor",
                erro: erro
            })
        }
    }

    async deletar(req,res) {
        try {
            const resultado = await produtoService.deletarProduto(req.params.id)
            res.status(200).json(resultado)
        } catch (erro) {
          res.status(500).json({
                sucesso: false, 
                mensagem: erro.mensagem || "Erro interno do servidor",
                erro: erro
            })  
        }
    }
}

module.exports = new ProdutoController()