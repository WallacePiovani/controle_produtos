import db from '../config/db.js';

export const cadastrarProduto = async (nome, preco) =>{
    try{
        const [result] = await db.query(
            'INSERT INTO produto (nomeProduto, preco) VALUES (?,?)',
            [nome, preco]
        );
        return result;
    }catch(err){
        console.log(`Erro ao cadastrar produto: ${err}`);
        throw err; //Vai enviar o erro para o controller(qnd eu criar) para trata-lo.
    }
}

export const listarProdutos = async () =>{
    try{
        const [rows] = await db.query('SELECT * FROM produto');
        return rows;
    }
    catch(err){
        console.log(`Erro ao listar produtos: ${err}`);
        throw err;
    }
}