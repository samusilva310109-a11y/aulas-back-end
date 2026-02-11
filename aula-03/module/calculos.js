/*********************************************************
 * Objetivo: Arquivo responsável pelas funções de calculos
 *  financeiros
 * 
 * Autor: Samuel Silva
 * Data: 11/02/2026
 * Versão 1.0 
*********************************************************/

function calcularPercentual(numero){
    if(numero == '' || numero <= 0 || isNaN(numero)){
        return false
    }else{
        
        let numeroPercentual = Number(numero)
        let porcentagem = numeroPercentual / 100

        return Number(porcentagem.toFixed(2)) //<- a função toFixed() transforma a variável em string para relizar o "corte" de casas decimais
    }
}

function calcularMontante(valorPrincipal, taxaJuros, numPeriodo){
    
    //Recebe os valores dos argumetos e converte em número
    let capitalInicial = Number(valorPrincipal)
    let taxa = Number(taxaJuros)
    let periodos = Number(numPeriodo)

    //Validação de vazio ou de caracteres
    if(valorPrincipal == '' || isNaN(valorPrincipal) || valorPrincipal <= 0 || numPeriodo == '' || isNaN(numPeriodo) || numPeriodo <= 0){
        return false
    }else{
        let percentual = calcularPercentual(taxa)

        if(percentual){ //<- se o percentual tiver um valor válido
            let montante = Number(capitalInicial) * (Math.pow((1 + percentual), Number(periodos)))
            return Number(montante.toFixed(2))
        }else{
            return false
        }
    }
}

//tornando as funções em públicas, para que outros arquivos possam utilizar
module.exports = {
    calcularMontante,
    calcularPercentual
}