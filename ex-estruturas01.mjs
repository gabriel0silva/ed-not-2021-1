/*
    Utilize a estrutura de dados adequada e implemente um programa que converta
    um número decimal em um número binário.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { Stack } from './lib/Stack.mjs'

const pilha = new Stack()
let rest, binString = ''

function decBin(numDec) {
    
    while(numDec > 0) {
        rest = Math.floor(numDec % 2)
        pilha.push(rest)
        numDec = Math.floor(numDec / 2)
    }

    while(! pilha.empty) {
        binString += pilha.pop().toString()
    }

    return binString
}

console.log(decBin(25))

