// Função eleva um número ao quadrado 
// Se precisar disso em uma situação real, use Math.pow() ou o operador **

function quadrado (n) {
    return n * n
}
console.log(quadrado(9))

// Caracteristicas da função acima:
// 1º Apenas um parâmetro 
// 2º Apenas uma linha de código, com return 
// 3º Candidata perfeita para virar ARROW FUNCTION 

// Transformando em arrow function
// a) Não precisa de parênteses envolvendo o parâmetro
// b) A palavra function é substituida pelo sinal =>, DEPOIS do parâmetro 
// c) Não são necessárias as chaves e nem a palavra return
const quadrado2 = n => n * n
console.log(quadrado2(9))