var idade = 19
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto Opcional')
    } else {
        console.log('Voto Obrigatório!')
    }







//1op. if (idade >= 16 && idade < 18) {
//2op. else if (idade >= 18) {