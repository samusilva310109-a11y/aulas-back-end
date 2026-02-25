/**********************************************************************************
 * Objetivo: Arquivo responsável pelo processamento de cálculos matemáticos (resultador,
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
            resultado = somar(valor1, valor2)
            break;

        case 'SUBTRAIR':
            resultado = subtrair(valor1, valor2)
            break;

        case 'MULTIPLICAR':
            resultado = multiplicar(valor1, valor2)
            break;
        case 'DIVIDIR':
            resultado = dividir(valor1, valor2)
            break;
    }
    
    //Saída
    return resultado
}

//função em formato de seta (arrow function)
const somar = (valor1, valor2) => Number(valor1) + Number(valor2) //<- formato válido apenas para funções de uma linha, caso seja necessário mais de uma linha, é necessário abrir chaves e usar o return para retornar o resultado da função exemplo: const somar = (valor1, valor2) => {conteúdo da função; return resultado}

const subtrair = (valor1, valor2) => Number(valor1) - Number(valor2)
const multiplicar = (valor1, valor2) => Number(valor1) * Number(valor2)
const dividir = (valor1, valor2) => {
    if(valor2 != 0)
        return Number(valor1) / Number(valor2)
    else
        return false
}

module.exports ={
    calcular,
    multiplicar
}
