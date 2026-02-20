/**********************************************************************************
 * Objetivo: Arquivo responsável pelo processamento de cálculos matemáticos (Somar,
 * Subtrair, Multiplicar, Dividir)
 * 
 * Data: 20/02/2026
 * Versão: 1.0
**********************************************************************************/
//toLowerCase -> retorna uma string em minusculo
//toUpperCase -> retotorna um string em maiusculo

//exemplo de função anônima

//função para calcular as 4 operações matemáticas
const calcular = function(numero1, numero2, operador){
    //Entrada de dados
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operadorMatematico = String(operador).toUpperCase()

    let resultado = false

    //Processamento
    // if(operadorMatematico == 'SOMAR'){
    //     resultado = valor1 + valor2
    // }else if(operadorMatematico == 'SUBTRAIR'){
    //     resultado = valor1 - valor2
    // }else if(operadorMatematico == 'DIVIDIR'){
    //     if(valor2 != 0)
    //         resultado = valor1 / valor2
    // }else if(operadorMatematico == "MULTIPLICAR"){
    //     resultado = valor1 * valor2
    // }

    switch (operadorMatematico) {
        case 'SOMAR':
            resultado = valor1 + valor2
            break;

        case 'SUBTRAIR':
            resultado = valor1 - valor2
            break;

        case 'MULTIPLICAR':
            resultado = valor1 * valor2
            break;
        case 'DIVIDIR':
            resultado = valor1 / valor2
            break;
    }
    
    //Saída
    return resultado
}

let result = calcular(2,7,'subtrair')

console.log(result)