# Sobre 
Essa API faz parte de um <a href="https://github.com/olisaude/teste-dev-backend">teste técnico</a> para desenvolvedores backend. Decidi buscar no Google exemplos reais de testes técnicos e apesar de não estar participando do processo seletivo, foi ideal para que eu pudesse colocar em prática o meu conhecimento e consolidar o entendimento das ferramentas.

Como descrito, eu poderia utilizar a linguagem e framework da minha escolha. Utilizei NodeJS, Express e para o banco de dados o MongoDB Atlas.

As rotas possuem verificações para caso falte preencher algum campo, se caso o e-mail cadastrado já existe no banco de dados etc. Veja abaixo um exemplo usando a ferramenta Insomnia 👇 

![image](/images/insomnia-example.png)

Repare que ele retornou um status HTTP 422 com uma mensagem de e-mail já cadastrado. Dentro de controllers você pode encontrar todas as outras verificações que usei.

# Rotas 
- Para listar todos os clientes use o método **GET** na rota padrão ("http://localhost:3000/")
- Para listar clientes específicos, use também o método **GET**, porém, com o endpoint ("http://localhost:3000/ **email** "). Decidi criar um campo para o e-mail na hora de cadastrar pois ficaria mais simples que buscar com ID. 
- Para criar um cliente novo, use o método **PUT** na rota padrão ("http://localhost:3000/") e preencha todos os campos necessários.
- Para editar um cliente, use o método **PATCH**, especifique o seu ID na rota ("http://localhost:3000/ **id** ") e preencha o campo que precisa ser alterado

## ⚠ Pré-requisitos
Para você conseguir executar o projeto na sua máquina e testá-lo, deverão estar instaladas as seguintes ferramentas: <br>
- <a href="https://nodejs.org/en/">NodeJS</a> para instalar dependências e rodar o localhost.
- <a href="https://insomnia.rest/download">Insomnia</a> ou <a href="https://www.postman.com/">Postman</a> para o uso das rotas e dos métodos HTTP

# Como executar 🤔

1 - Clone este repositório
```sh
$ git clone https://github.com/GabeOP/teste-dev-backend.git
```

2 - Instale as dependências que estão listadas no arquivo package.json
```sh
$ npm install
```

3 - Execute o servidor
```sh
$ node index.js
```

# Print do README que contém todos os passos para a criação do projeto

**Repositório original: https://github.com/olisaude/teste-dev-backend**

<div align="center"> <img src="/images/teste-tecnico.png"> </div>


