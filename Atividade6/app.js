const express = require('express');
const path = require('path');
const fs = require('fs').promises; // Importa o módulo 'fs' para manipulação de arquivos
const app = express();
const port = 3000;

// Define o middleware para processar os dados do formulário
app.use(express.urlencoded({ extended: true }));

// Define o diretório de arquivos estáticos
app.use(express.static('public'));

// Define a rota principal para renderizar o formulário
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Define a rota para lidar com os dados do formulário
app.post('/dados', async (req, res) => {
    const { nome, endereco, telefone, data } = req.body;
    const dadosHtml = await criarDadosHtml(nome, endereco, telefone, data);
    res.send(dadosHtml); // Envia o HTML criado como resposta
});

// Função para criar o HTML com os dados do formulário
async function criarDadosHtml(nome, endereco, telefone, data) {
    try {
        const dadosTemplate = await fs.readFile(path.join(__dirname, 'views', 'dados.html'), 'utf8');
        // Substitui os placeholders pelos dados do formulário
        const dadosHtml = dadosTemplate
            .replace('<%= nome %>', nome)
            .replace('<%= endereco %>', endereco)
            .replace('<%= telefone %>', telefone)
            .replace('<%= data %>', data);
        return dadosHtml;
    } catch (error) {
        console.error('Erro ao ler o arquivo dados.html:', error);
        return ''; // Retorna uma string vazia em caso de erro
    }
}

// Inicia o servidor
app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});
