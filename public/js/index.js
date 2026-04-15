import * as listarProdutos from './services/produtoServices.js';
import * as cadastrarProduto from './services/produtoServices.js';
import * as produtoServices from './services/produtoServices.js';

window.onload = function(){
    listarProdutos.carregarProdutos();
    const form = document.querySelector('form');
    form.addEventListener('submit', async (e) =>{
        e.preventDefault();

        const nomeProduto = document.querySelector('#produto').value;
        const preco = document.querySelector('#preco').value;
        const idExiste = document.querySelector('#produto-id').value;

        if(idExiste){
            await produtoServices.atualizarProdutos(idExiste, {produto: nomeProduto, preco: preco});
            document.querySelector('#produto-id').value = '';
            document.querySelector('button[type="submit"]').textContent = 'Cadastrar Produto';
            window.alert(`O produto: ${nomeProduto} foi atualizado com sucesso!` );
        }
        else{
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
        }
    });


    window.editarProduto = function(id, nome,preco) {
        document.querySelector('#produto').value = nome;
        document.querySelector('#preco').value = preco;
        document.querySelector('#produto-id').value = id;

        document.querySelector('button[type="submit"]').textContent = 'Salvar Alterações';
        
    }

    window.confirmarExclusao = async (id) => {
        const confirmacao = window.confirm('Tem certeza que deseja excluir este produto?');
        if(confirmacao){
            try{
                await produtoServices.excluirProdutos(id);
                window.alert('Produto excluído com sucesso!');
                listarProdutos.carregarProdutos();
            }
            catch(err) {
                console.error('Erro ao excluir produto:', err);
            }

        }
    }
}