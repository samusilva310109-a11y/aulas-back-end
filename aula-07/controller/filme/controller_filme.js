/*******************************************************************
 * Objetivo: arquivo responsável pelo validação, tratamento e manipulação
 *           de dados para realizar o CRUD de filmes
 * Data:17/02/2026
 * Autor: Samuel Silva Moreira Dos Santos
 * Versão:1.0
 *******************************************************************/

//Import do arquivo de configurações de menssagens do projeto
const configMessages = require("../modulo/configMessage.js")

//Import do arquivo responsável por manipular os dados do filme no banco de dados
const FilmeDAO = require("../../model/DAO/filme/filme.js")

//Função para inserir um novo filme
async function  inserirNovoFilme(filme){

    //Cria uma cópia dos JSON do arquivo de configuração de mensagens
    let customMessage = JSON.parse(JSON.stringify(configMessages))

    if(filme.nome == undefined || filme.nome == null || filme.nome == " " || filme.nome.length > 80){
        customMessage.ERROR_BAD_REQUEST.field = "[NOME] INVÁLIDO"
    }else if (filme.sinopse == undefined || filme.sinopse == null || filme.sinopse == " ") {
        customMessage.ERROR_BAD_REQUEST.field = "[SINOPSE] INVÁLIDO"
    } else if (filme.capa == undefined || filme.capa == null || filme.capa == " " || filme.capa.length > 255){
        customMessage.ERROR_BAD_REQUEST.field = "[CAPA] INVÁLIDO"
    }else if (filme.data_lancamento == undefined || filme.data_lancamento == null || filme.data_lancamento == " " || filme.data_lancamento.length != 10) {
        customMessage.ERROR_BAD_REQUEST.field = "[DATA DE LANÇAMENTO] INVÁLIDO"
    } else if (filme.duracao == undefined || filme.duracao == null || filme.duracao == " " || filme.duracao.length < 5){
        customMessage.ERROR_BAD_REQUEST.field = "[DURAÇÃO] INVÁLIDO"
    }else if (filme.valor == undefined || isNaN(filme.valor) == null || filme.valor.length > 5){
        customMessage.ERROR_BAD_REQUEST.field = "[VALOR] INVÁLIDO"
    }else if (filme.avaliacao == undefined || isNaN(filme.avaliacao) == null || filme.avaliacao.length > 3){
        customMessage.ERROR_BAD_REQUEST.field = "[AVALIAÇÃO] INVÁLIDO"
    }else{
        let result = await FilmeDAO.insertFilme(filme)

        if (result) {
            customMessage.DESFAULT_MESSAGE.status = customMessage.SUCESS_CREATED_ITEM.status
            customMessage.DESFAULT_MESSAGE.status_code = customMessage.SUCESS_CREATED_ITEM.status_code
            customMessage.DESFAULT_MESSAGE.message = customMessage.SUCESS_CREATED_ITEM.message
        }else{
            customMessage.DESFAULT_MESSAGE.status = customMessage.INTERNAL_SERVER_ERROR_MODEL.status
            customMessage.DESFAULT_MESSAGE.status_code = customMessage.INTERNAL_SERVER_ERROR_MODEL.status_code
            customMessage.DESFAULT_MESSAGE.message = customMessage.INTERNAL_SERVER_ERROR_MODEL.message
        }

        return customMessage.DESFAULT_MESSAGE
    }
}

//Função para atualizar um filme existente
async function atualizarFilme() {
    
}

//Função para retornar todos os filmes existentes
async function listarFilmes() {
    
}

//Função para retornar um filme filtrando pelo ID
async function buscarFilme() {
    
}

//Função para excluir um filme
async function excluirFilme() {
    
}

module.exports = {
    inserirNovoFilme,
    atualizarFilme, 
    listarFilmes,
    buscarFilme,
    excluirFilme
}