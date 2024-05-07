let produtos = {};

function adicionar(id, nome, qtd) {
    produtos[id] = { nome, qtd: parseInt(qtd, 10) };
}

function listar() {
    return Object.keys(produtos).map((id) => {
        return { id, ...produtos[id] };
    });
}


function remover(id) {
    delete produtos[id];
}

function editar(id, qtd) {
    if (produtos[id]) {
        produtos[id].qtd = parseInt(qtd, 10);
    }
}

module.exports = { adicionar, listar, remover, editar };