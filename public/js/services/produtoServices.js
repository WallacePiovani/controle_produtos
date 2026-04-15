export async function carregarProdutos(){
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
                <td>
                    <button onclick="editarProduto(${produto.id}, '${produto.nomeProduto}', ${produto.preco})">Editar</button>
                </td>
                <td>
                    <button onclick="confirmarExclusao(${produto.id})">Excluir</button>
                </td>
            </tr>
            `;
            tbody.innerHTML += linha;
        })
    } 
    catch (err) {
        console.error('Erro ao carregar produtos:', err);
    }
}

export async function cadastrarProdutos(produtoData){
    const response = await fetch('http://localhost:1400/produtos',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produtoData)
    });
    if (!response.ok) throw new Error('Erro ao cadastrar produto');
    return await response.text();
}

export async function atualizarProdutos (id, produtoData){
    const response = await fetch (`http://localhost:1400/produtos/${id}`,{
        method: 'PUT',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(produtoData)
    });
    return await response.text();
}

export async function excluirProdutos(id){
    const response = await fetch (`http://localhost:1400/produtos/${id}`,{
        method: 'DELETE'
    })
    return await response.text();
}