import * as listarProdutos from './services/produtoServices.js';
import * as cadastrarProduto from './services/produtoServices.js';

window.onload = function(){
    listarProdutos.carregarProdutos();
    const form = document.querySelector('form');
    form.addEventListener('submit', async (e) =>{
        e.preventDefault();

        const nomeProduto = document.querySelector('#produto').value;
        const preco = document.querySelector('#preco').value;

        try{
            await cadastrarProduto.cadastrarProdutos({produto: nomeProduto, preco: preco});
            window.alert(`O produto: ${nomeProduto} foi cadastrado com sucesso!` );
            form.reset();
            listarProdutos.carregarProdutos();
            window.location.reload();
        }
        catch (err) {
            console.error('Erro ao cadastrar produto:', err);
        }
    })
}