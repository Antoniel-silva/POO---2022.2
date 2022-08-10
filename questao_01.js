const prompt = require('prompt-sync')();

const numero = Number(prompt('Escolha e digite um numero: '))
const antecessor = parseInt((numero) / 1)
const sucessor = parseInt((numero)+1)

console.log(`o antececor é: ${antecessor} e o sucessor e: ${sucessor}`)