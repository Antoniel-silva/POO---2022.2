const prompt = require('prompt-sync')();

const real = Number(prompt('Digite o valor em real: '))

const bitcoin = (real / 119083.20).toFixed(8)

console.log(`O valor em R$ para bitcoin é: ${bitcoin}`)