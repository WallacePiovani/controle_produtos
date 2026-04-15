import * as produtoModel from "../models/produtoModel.js";

export const cadastrarProduto = async (req, res) =>{
    const nomeProduto = req.body.produto;
    const precoProduto = req.body.preco;
    try {
        const result = await produtoModel.cadastrarProduto (nomeProduto, precoProduto);
        console.log (`Produto inserido com sucesso: ${result.insertId}`);
        res.status(201).send(`Produto: ${nomeProduto}, com o preço R$${precoProduto} cadastrado com sucesso!`);
    }
    catch (err){
        console.log(`Erro ao cadastrar produto: ${err}`);
        res.status(500).send('Erro ao cadastrar produto');
    }
}

export const listarProdutos = async (req, res) =>{
    try{
        const produtos = await produtoModel.listarProdutos();
        res.status(200).json(produtos);
    }
    catch (err){
        console.log(`Erro ao listar produtos: ${err}`);
        res.status(500).send('Erro ao listar produtos');
    }

}

export const atualizarProduto = async (req, res) =>{
    const id = req.params.id;
    const nomeProduto = req.body.produto;
    const precoProduto = req.body.preco;

    try{
        const result = await produtoModel.atualizarProduto(id, nomeProduto, precoProduto);
        console.log(`Produto atualizado com sucesso: ${result.affectedRows} linha(s) afetada(s)`);
        console.log(`Produto atualizado: ID ${id}, Nome: ${nomeProduto}, Preço: R$${precoProduto}`);
        res.status(200).json(result);
    }
    catch (err){
        console.log(`Erro ao atualizar produto: ${err}`);
        res.status(500).send('Erro ao atualizar produto');
    }
}

export const deletarProduto = async (req, res) =>{
    const id = req.params.id;
    
    try{
        const result = await produtoModel.deletarProduto(id);
        console.log(`Produto deletado com sucesso: ${result.affectedRows} linha(s) afetada(s)`);
        res.status(200).json(result);
    }
    catch(err){
        console.log(`Erro ao deletar produto: ${err}`);
        res.status(500).send('Erro ao deletar produto');
    };
}