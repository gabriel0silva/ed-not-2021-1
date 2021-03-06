/*
function buscaSequencial(vetor, valorBusca, fnComp) {
     for(let i = 0; i < vetor.length; i++) {
        // Em vez de fazer a comparação dentro da função de busca,
        // "terceirizamos" essa comparação chamando uma função externa 
        if(fnComp(vetor[i], valorBusca)) return i // Retorna a posição onde foi encontrado
    }
    return -1  // Valor de busca não encontrado
}
*/

// Outra forma
function buscaSequencial(vetor, fnComp) {
     for(let i = 0; i < vetor.length; i++) {
        // Em vez de fazer a comparação dentro da função de busca,
        // "terceirizamos" essa comparação chamando uma função externa 
        if(fnComp(vetor[i])) return i // Retorna a posição onde foi encontrado
    }
    return -1  // Valor de busca não encontrado
}
/*
function comparaNome(objNome, valorBusca) {
    return objNome.fist_name === valorBusca
}
*/

const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca
const comparaGrupo = (objNome, valorBusca) => objNome.group_name === valorBusca

import { objNomes } from './includes/vetor-obj-nomes.mjs'

/*
console.log(buscaSequencial(objNomes, 'FAUSTO', comparaNome))
console.log(buscaSequencial(objNomes, 'MARIA', comparaGrupo))

console.log("------------------------------------------------------------")
// Jeito mais simples
console.log(buscaSequencial(objNomes, 'FAUSTO', (obj, busca) => obj.first_name === busca))
console.log(buscaSequencial(objNomes, 'MARIA', (obj, busca) => obj.group_name === busca))
*/

console.log("------------------------------------------------------------")
// Jeito mais simples
console.log(buscaSequencial(objNomes, obj => obj.first_name === 'FAUSTO'))
console.log(buscaSequencial(objNomes, obj => obj.group_name === 'MARIA'))

// Primeiro nome da lista que tem mais de 1000 pessoas registradas com ele
let pos = buscaSequencial(objNomes, obj => obj.frequency_total > 1000)

console.log(objNomes[pos])

// Primeiro nome masculino da lista com mais de 10000 registrados
pos = buscaSequencial(objNomes, obj => obj.frequency_total > 10000 && obj.classification === 'M')
console.log(objNomes[pos])
