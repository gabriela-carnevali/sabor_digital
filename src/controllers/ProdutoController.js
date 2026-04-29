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
            res.status(500).jsom({
                sucesso: false, 
                mensagem: erro.mensagem || "Erro interno do servidor",
                erro: erro
            })
        }
    }
}