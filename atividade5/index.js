const express = require('express');
const { adicionar, listar, remover, editar } = require('./estoque');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>Bem-vindo à API de Gerenciamento de Estoque</h1>
        <p>Use as seguintes rotas para interagir com o estoque:</p>
        <ul>
            <li>Adicionar um novo produto: <code>/adicionar/:id/:nome/:qtd</code></li>
            <li>Listar todos os produtos: <code>/listar</code></li>
            <li>Remover um produto: <code>/remover/:id</code></li>
            <li>Editar a quantidade de um produto: <code>/editar/:id/:qtd</code></li>
        </ul>
    `);
});

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    adicionar(req.params.id, req.params.nome, req.params.qtd);
    res.send('Produto adicionado com sucesso.');
});

app.get('/listar', (req, res) => {
    res.json(listar());
});

app.get('/remover/:id', (req, res) => {
    remover(req.params.id);
    res.send('Produto removido com sucesso.');
});

app.get('/editar/:id/:qtd', (req, res) => {
    editar(req.params.id, req.params.qtd);
    res.send('Quantidade do produto atualizada com sucesso.');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});