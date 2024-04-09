module.exports = {
    somar: (a, b) => a + b,
    subtrair: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => (b === 0 ? 'Erro: Divisão por 0' : a / b),
};