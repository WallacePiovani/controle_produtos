# Sistema de Gerenciamento de Produtos (CRUD Fullstack)

Este é um projeto de gerenciamento de produtos desenvolvido para consolidar conhecimentos em desenvolvimento Web Fullstack. A aplicação permite realizar o ciclo completo de um CRUD (Create, Read, Update, Delete) utilizando uma arquitetura organizada e escalável.

## Tecnologias Utilizadas

### Backend
- **Node.js**: Ambiente de execução.
- **Express**: Framework para gerenciamento de rotas e middlewares.
- **MySQL**: Banco de dados relacional para persistência de dados.
- **dotenv**: Gerenciamento de variáveis de ambiente (segurança).

### Frontend
- **HTML5 & CSS3**: Estrutura e estilização da interface.
- **JavaScript (ES6+)**: Lógica de manipulação do DOM e consumo de API via Fetch.
- **Modularização**: Separação de funções em Services para melhor manutenção.

---

## Arquitetura MVC

O projeto foi estruturado seguindo o padrão de arquitetura **MVC (Model-View-Controller)**, garantindo a separação de responsabilidades:

- **Model**: Localizado em `src/models`, é responsável pela comunicação direta com o banco de dados e execução das queries SQL.
- **Controller**: Localizado em `src/controller`, gerencia a lógica de negócio, recebe as requisições e envia as respostas ao cliente.
- **View**: Localizada na pasta `public`, contém a interface do usuário e os scripts de frontend que consomem a API.
- **Routes**: Localizado em `src/routes`, define os endpoints da aplicação.

---

## API Endpoints

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **GET** | `/listar-produtos` | Retorna a lista de todos os produtos cadastrados. |
| **POST** | `/produtos` | Cadastra um novo produto. |
| **PUT** | `/produtos/:id` | Atualiza os dados de um produto existente. |
| **DELETE** | `/produtos/:id` | Remove um produto do sistema. |

---

##  Como Executar o Projeto

### Pré-requisitos
- Node.js instalado.
- Banco de Dados MySQL ativo.

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/WallacePiovani/controle_produtos.git
   ```

2. **Instalar as dependências:**
   Navegue até a pasta do projeto e execute:
   ```bash
   npm install
   ````


3. **Configurar as Variáveis de Ambiente:**
   Crie um arquivo chamado `.env` na raiz do projeto e preencha com as suas credenciais de banco de dados:
   ```env
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASS=sua_senha
   DB_NAME=nome_do_seu_banco
   PORT=1400

4. **Criar a Tabela no Banco de Dados:**
   Utilize o script abaixo no seu MySQL Workbench ou terminal:
   ```sql
   CREATE TABLE produto (
       id INT PRIMARY KEY AUTO_INCREMENT,
       nomeProduto VARCHAR(255) NOT NULL,
       preco DECIMAL(10,2) NOT NULL
   );

5. **Iniciar o Servidor:**
   ```bash
   npm start
   ```
   Com o servidor rodando, abra no seu navegador:  http://localhost:1400


   ##  Próximas Implementações (Roadmap)

- [ ] **Validação de Dados:** Implementar validações no Backend (utilizando bibliotecas como Joi ou Zod) para garantir a integridade dos dados.
- [ ] **Soft Delete:** Alterar a lógica de exclusão para "deleção lógica", mantendo os registros no banco mas ocultando-os da interface.
- [ ] **Autenticação:** Sistema de login e proteção de rotas utilizando JWT (JSON Web Tokens).
- [ ] **Melhoria de UI/UX:** Substituir alertas nativos por modais do SweetAlert2 e adicionar estados de "carregando" nos botões.
- [ ] **Busca e Filtros:** Implementar uma barra de pesquisa para localizar produtos por nome diretamente na tabela.


---
Desenvolvido por **Wallace**,  *Analista e Desenvolvedor de Sistemas*
