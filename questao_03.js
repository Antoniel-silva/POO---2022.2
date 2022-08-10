const prompt = require('prompt-sync')()

function main(){
    const n1 = Number(prompt('Digite o primeiro numero: '))
    const n2 = Number(prompt('Digite o segundo numero: '))
    const n3 = Number(prompt('Digite o terceiro numero: '))

    let maior = n1
    let menor = n1

    if(n2 > maior){
        maior = n2
    }else if(n2 < menor){
        menor = n2
    }
    if (n3 > maior){
        maior = n3
    }else if(n3 < menor){
        menor = n3
    }

    console.log(`O maior numero é: ${maior} 'e o menor: ${menor}`)
}

main()