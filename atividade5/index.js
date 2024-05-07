<<<<<<< HEAD
const express = require('express');
const app = express();
app.use(express.json());

let estoque = [];

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    estoque.push({ id, nome, quantidade: parseInt(qtd) });
    res.send('Produto adicionado ao estoque.');
});

app.get('/listar', (req, res) => {
    res.json(estoque);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    estoque = estoque.filter(produto => produto.id !== id);
    res.send('Produto removido do estoque.');
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const index = estoque.findIndex(produto => produto.id === id);
    if (index !== -1) {
        estoque[index].quantidade = parseInt(qtd);
        res.send('Quantidade do produto atualizada.');
    } else {
        res.status(404).send('Produto não encontrado.');
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
=======
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
>>>>>>> a24a0294505913b17605476b9dc0beee38780e17
