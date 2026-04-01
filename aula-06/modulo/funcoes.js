/******************************************************************
* Objetivo: criar funções que poderão serem utilizadas por uma API
* Data: 20/03/2026
* Autor: Samuel  Silva Moreira Dos Santos  
* ****************************************************************/

const estadosCidades = require('./estados_cidades')
const listaDeEstados = estadosCidades.listaDeEstados;


const getListaEstados = () => {
    let lista = {
        uf: [],
        quantidade: listaDeEstados.estados.length
    }

    listaDeEstados.estados.forEach(uf => {
        lista.uf.push(uf.sigla)
    })

    if(Object.keys(lista).length == 0)
        return false
    else
        return lista
}

const getDadosEstados = (siglaUf) => {
    let dados = {}

    listaDeEstados.estados.forEach(item => {
        if (String(siglaUf).toUpperCase() == String(item.sigla).toUpperCase()) {
            dados = {
                uf: item.sigla,
                descricao: item.nome,
                capital: item.capital,
                regiao: item.regiao
            }
        }
    })

    if(Object.keys(dados).length == 0)
        return false
    else
        return dados
}

const getCapitalEstado = (siglaUf) => {
    let dados = {}

    listaDeEstados.estados.forEach(item => {
        if (String(siglaUf).toUpperCase() == String(item.sigla).toUpperCase()) {
            dados = {
                uf: item.sigla,
                descricao: item.nome,
                capital: item.capital
            }
        }
    })

    if(Object.keys(dados).length == 0)
        return false
    else
        return dados

}

const getEstadosRegiao = (regiao) => {
    let estadosRegioes = {
        regiao: String(regiao).toUpperCase(),
        estados: []
    }

    listaDeEstados.estados.forEach(estado => {
        if (String(regiao).toUpperCase() == String(estado.regiao).toUpperCase()) {
            estadosRegioes.estados.push({uf: estado.sigla, descricao: estado.nome})
        }
    })

    if(estadosRegioes.estados.length == 0)
        return false
    else
        return estadosRegioes
}

const getCapitalPais = () => {

    let pais = {
        capitais: []
    }

    listaDeEstados.estados.forEach(estados => {

      if (estados.capital_pais != undefined) {
        pais.capitais.push({
            capital_atual: estados.capital_pais.capital,
            uf: estados.regiao,
            descricao: estados.nome,
            capital: estados.capital,
            regiao: estados.regiao,
            capital_pais_ano_inicio: estados.capital_pais.ano_inicio,
            capital_pais_ano_fim: estados.capital_pais.ano_fim
        })
      }
    })

    if(pais.capitais.length == 0)
        return false
    else
        return pais
}

const getCidades = (siglaUf) => {

    let listaCidades = {}

    listaDeEstados.estados.forEach(estado => {
        if (String(siglaUf).toUpperCase() == String(estado.sigla).toUpperCase()){
            
            listaCidades = {
                uf: estado.sigla,
                descricao: estado.nome,
                quantidade_cidades: estado.cidades.length,
                cidade:[],
            }
            estado.cidades.forEach(cidade=>{
               listaCidades.cidade.push(cidade.nome) 
            })
         
        }    
    })
    
    if(listaCidades.length == 0)
        return false
    else
        return listaCidades
}

console.log(getEstadosRegiao("sudeste"));
 

module.exports = {
    getListaEstados,
    getDadosEstados,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}