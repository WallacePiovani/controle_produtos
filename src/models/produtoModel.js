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