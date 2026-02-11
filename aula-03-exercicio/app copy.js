/****************************************************************************
* Objetivo: Projeto para realizar o cálculo de média escolares
* Autor: Samuel Silva
* Data 29/01/2026
* Versão 1.0.1.26
******************************************************************************/

/**
 *  Formas de criar variáveis:
 * 
 *      var -> forma antiga de se criar variáveis. Possui escopo global (ou de função).
 * 
 *      let -> forma moderna de criar variáveis. Possui escopo local (ou escopo de bloco), ou seja, 
 *          ela não será "vista" pelo restante do código.
 * 
 *      const -> é recomendável utilizá-la em criação de valores inalteráveis (valores constantes).
 *          As variáveis que recebem valores constantes, por boa prática deve-se serem nomeadas com
 *          todas as letras maiscúlas.
 *          Pode ser criada tanto em escopo global quanto em escopo local.
 *          OBS: em caso da variável cosntante for um import de uma biblioteca (que não é sua), deve-se
 *          por boa prática criar com a case da biblioteca.
*/

/**
*  Operadores de comparação no Javascript
*      
*      == -> Permite comparar a igualdade de dois valores
*      != -> Permite comparar a difernça de dois conteúdos
*      <  -> Permite validar se o valor é menor 
*      >  -> Permite validar se o valor é maior 
*      <= -> Permite validar se o valor é menor ou igual
*      >= -> Permite validar se o valor é maior ou igual
*      === -> Compara a igualdade de conteúdo e tipagem de dados 
*      !== -> Compara a difernça de conteúdo e a igualdade de tipagem de dados
*      ==! -> Compara a igualdade de conteúdo e a diferença de tipagem de dados
* 
* Operadores Lógicos
* 
*      E -> AND -> &&
*      OU -> OR -> ||
*      NAO -> NOT -> !
* 
* Função isNaN() -> is Not a Number
*      
*      Permite a validação de letras ou números verificando o conteúdo de uma variável  
*/

/**
 * Anotações
 * 
 * Convertendo Strings para Numbers
 *      funções: 
 *          parseFloat() -> converte para números de ponto flutuante ou decimais
 *          parsent() -> converte para números inteiros
 *          
 *      classe:
 *          Nas versões mais modernas do Javascript existe uma classe que possiblita a conversão de strings para números
 * 
 *              Number() -> converte strings para números sem especificar se é do tipo inteiro ou ponto flutuante. Ele converte
 *                  de forma dinâmica
 * 
 * Convertendo Numbers para Strings
 *      String -> permite converter um conteúdo para Strings
 * 
 * Conteúdo -> Booleano
 *      Boolean() -> permite converter um conteúdo para valor booleano
 * 
 * typeOf() -> retorna o tipo de dado de uma variável (String, Number, Boolean ou Object)
 * 
 * toFixed() -> é um método que permite fixar a quantidade de casas decimais
 * 
*/

//Import da biblioteca de entrada de dados
const readLine = require('readline');

//instanciação de um objeto para captar as entradas de dados
const entradaDeDados  = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Criamos uma réplica da variável de argumentação da função de callback para a utilização do valor sem a perda do seu valor original
entradaDeDados.question('Digite o nome do aluno: ', function(nomeAluno){
    let nome = nomeAluno;

    entradaDeDados.question('Digite a primeira nota: ', function(valor1){
        let nota1 = valor1;

        entradaDeDados.question('Digite a segunda nota: ', function(valor2){
            let nota2 = valor2;

            entradaDeDados.question('Digite a terceira nota: ', function(valor3){
                let nota3 = valor3;

                entradaDeDados.question('Digite a quarta nota: ', function(valor4){
                    let nota4 = valor4;

                    let media = require('./module/media')

                    let mediaAuluno = media.calcularMedia(nota1, nota2, nota3, nota4)
                    let statusAluno = media.definirStatusAluno(media)

                    if(nomeAluno != '' && mediaAuluno && statusAluno){
                        console.log(`\nAluno(a): ${nomeAluno} \nMédia: ${mediaAuluno}\nSituação do aluno: ${statusAluno}`);
                        entradaDeDados.close()
                    }else{
                        console.log('ERRO DE PROCESSAMENTO')
                        entradaDeDados.close()
                    }                                   
                })
            })
        })
    })
})


