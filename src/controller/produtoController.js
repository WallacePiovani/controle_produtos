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