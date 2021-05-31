import { DoublyLinkedList } from './DoublyLinkedList.mjs'

export class HashTable {
    
    #table            // Vetor de estruturas
    #hashFunction      // Função de espalhamento

    constructor(count, hashFunction) {

        // Criando as estruturas finais (DLL) e colocando-as no vetor
        this.#table = []
        for(let i = 0; i < count; i++) this.#table.push(new DoublyLinkedList())

        // Armazenando a função de espalhamento passada para uso posterior
        this.#hashFunction = hashFunction
    }
}