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
