/******************************************************************************************************
 * Objetivo: Arquivo responsável por gerar uma tabuada utilizando WHILE e FOR (estruturas de repetição)
 * Data: 25/02/2026
 * Autor: Samuel Silva Moreira Dos Santos
 * Versão: 1.0s
 *****************************************************************************************************/
const calculo = require('./calculo')

const gerarTabuadaWhile = function(numero){
    let valor = Number(numero)
    let contador = 0
    let resultado

    while(contador <= 10){
        resultado = calculo.multiplicar(valor, contador)
        console.log(`${valor} X ${contador} = ${resultado}`)
        contador++ 
    }    
}

const gerarTabuadaFor = function(numero){
    let valor = Number(numero)
    let resultado

    for(contador = 0; contador <= 10; contador++){
        resultado = calculo.multiplicar(valor, contador)
        console.log(`${valor} X ${contador} = ${resultado}`)
        
    } 
}

let tabuada = gerarTabuadaFor(2)

