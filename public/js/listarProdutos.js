async function carregarProdutos(){
    try{
        const response = await fetch('http://localhost:1400/listar-produtos');
        const produtos = await response.json();

        const tbody = document.querySelector('#produto-lista');
        tbody.innerHTML= '';

        produtos.forEach(produto =>{
            const linha = `
            <tr>
                <td>${produto.id}</td>
                <td>${produto.nomeProduto}</td>
                <td>R$${produto.preco}</td>
            </tr>
            `;
            tbody.innerHTML += linha;
        })
    } 
    catch (err) {
        console.error('Erro ao carregar produtos:', err);
    }
}

window.onload = carregarProdutos;