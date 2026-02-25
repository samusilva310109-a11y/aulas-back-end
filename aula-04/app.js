/**
 * Objetivo: arquivo responsável somente pelas entradas e saídas de dados
 * Data: 20/02/2026 
 * 
 * Autor: Samuel Silva Moreira Dos Santos
 * Versão: 1.0
 */

//Import do arquivo de processamento de cálculos matemáticos
const calculo = require('./module/calculo')

const resultado = calculo.calcular(10, 5, 'somar')
console.log(resultado)

/**
 * Uma função só chama outra função se isso fazer sentido a ela. Exemplo:
 * A função calcular só chama a função somar, subtrair, multiplicar ou dividir, pois estas função são  
 * necessárias para o cálculo dos números, porém seria incorreto caso a função de validação chamasse a 
 * função calcular, pois esta função é responsável apenas por verificar se os dados estão corretos e  
 * retornar false ou true, e não processar o cálculo e retornar o resultado desta operação. 
*/
   
/**
 * O app é como se fosse o garçom de um restaurante, ele apenas recebe o pedido do cliente, e repassa 
 * para cozinha onde este pedido juntamente com os dados serão processados, caso o resultado seja 
 * positivo, o app recebe o resultado e repassa para o cliente, caso seja negativo, o app apresentará uma
 * mensagem de erro, ou seja o if e else que apresentará a mensagem de erro ou o resultado do
 * processamento, estará no app
*/