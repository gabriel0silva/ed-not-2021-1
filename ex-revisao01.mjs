/*
    1. Identifique o algoritmo abaixo.
    2. Comente o que faz cada uma das linhas.
    3. Introduza a função de comparação e faça os ajustes necessários para o
       respectivo funcionamento.
    4. Teste o algoritmo no arquivo dados/candidatos-2018.mjs, ordenando primeiramente
       por SG_UE e depois por NR_CANDIDATO.
*/


const a = (b, fnComp) => {
    
    const c = (d, e) => {

        let f = e

        for(let g = e + 1; g < d.length; g++) {
            // if(d[g] < d[f]) 
            if(fnComp(d[f], d[g])) {
                f = g
            }
        }
        return f
    }

    for(let h = 0; h < b.length - 1; h++) {
        let i = c(b, h + 1)
        // if(b[h] > b[i]) 
        if(fnComp(b[h], b[i])) {
            [b[h], b[i]] = [b[i], b[h]]
        }
    }
}



import { candidatos } from './includes/candidatos-2018.mjs'


a(candidatos, (obj1, obj2) => {
    if(obj1.SG_UE === obj2.SG_UE) {     
        
        return obj1.NR_CANDIDATO > obj2.NR_CANDIDATO
    }
    else return obj1.SG_UE > obj2.SG_UE     // A diferenciação se dá por UE
})

console.log(candidatos)