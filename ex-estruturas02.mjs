/*
    Implemente um programa verificador de palíndromos utilizando um deque.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { Deque } from './lib/Deque.mjs'

const texto = 'Socorram-me, subi no ônibus em Marrocos'

const deque = new Deque()

// Empilhamento
for(let i = 0; i < texto.length; i++) {
    deque.insertBack(texto.charAt(i))
}


let textoRev = ''

// Desempilhamento
while(! deque.empty) { 
    textoRev += deque.removeBack()
}
console.log(textoRev)