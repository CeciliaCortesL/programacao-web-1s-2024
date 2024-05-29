const calculadora = require('../calculadora/calculadora');

exports.showForm = (req, res) => {
    res.render('index');
};

exports.calcular = (req, res) => {
    const { num1, num2, operacao } = req.body;
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if (isNaN(numero1) || isNaN(numero2)) {
        res.render('index', { erro: 'Insira valores numéricos válidos.' });
        return;
    }

    const resultado = calculadora.calcular(numero1, numero2, operacao);
    res.render('resultado', { resultado });
};
