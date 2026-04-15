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
        throw err; 
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

export const atualizarProduto = async (id, nome ,preco) =>{
    try{
        const [result] = await db.query(
            'UPDATE produto SET nomeProduto = ?, preco = ? where id = ?', [nome, preco, id]
        );
        return result;
    }
    catch(err){
        console.log(`Erro ao atualizar produto: ${err}`);
        throw err;
    }
}