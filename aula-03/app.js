/******************************************************
 * Objetivo: criar uma aplicação que realiza cálculo de
 * juros utilizando funções para modularizar o código
 * 
 * Autor:Samuel Silva Moreira Dos Santos
 * Data: 11/02/2026
 * versão 1.0
******************************************************/

const readLine = require('readline')
const { isNumberObject } = require('util/types')

const entradaDeDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o nome do cliente: ', function(nome){
    let nomeCliente = nome

    entradaDeDados.question('Digite o nome do produto: ', function(produto){
        let nomeProduto = produto

        entradaDeDados.question('Digite o valor da compra: ', function(valor){
            let valorCompra = valor

            entradaDeDados.question('Digite a taxa de juros(%): ', function(taxa){
                let taxaJuros = taxa

                entradaDeDados.question('Digite a quantidade de parcelas: ', function(parcelas){
                    let qtdeParcelas = parcelas

                    let calculos = require('./module/calculos.js')
                    
                    let montante = calculos.calcularMontante(valorCompra, taxaJuros, qtdeParcelas)

                    if(montante){
                        console.log('o valor final é: ' + montante)
                        entradaDeDados.close()
                    }else{
                        console.log('ERRO: NÃO FOI POSSÍVEL PROCESSAR O CÁLCULO')
                        entradaDeDados.close()
                    }
                })
            })
        })
    })
})

