/*
let num = [1, 2, 5, 8]
num.sort()
//num[3] = 6
//num.push(7)

console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)


let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)

for(let pos=0; por < valores.length; pos++) { 
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
NÃO FUNCIONA! ^ */

// FUNCIONA! \/

let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)

//for(let pos in valores) {
//    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
// }

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)