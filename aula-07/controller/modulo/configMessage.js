/*******************************************************************
 * Objetivo: arquivo responsável pela padronização das mensagens e status code
 *           do projeto filmes
 * Data:17/02/2026
 * Autor: Samuel Silva Moreira Dos Santos
 * Versão:1.0
 *******************************************************************/

//Padronização dos retornos da API
const DEFAULT_MESSAGE = {
    api_description:"API para controlar projeto de filmes",
    developer:"Samuel Silva Moreira Dos Santos",
    version:"1.0.4.26",
    status: Boolean,
    status_code: Number,
    response: {}
} 

//Menssagens de erro do projeto de filmes
const ERROR_BAD_REQUEST = {
    staus:false,
    status_code:400,
    message: "Não foi possível processar há inconsistências nos dados."
}

const INTERNAL_SERVER_ERROR_MODEL = {
    status:false,
    status_code:500,
    message: "Não foi possível processar a requisição devido a um erro interno no servidor [MODEL]"
}

const INTERNAL_SERVER_ERROR_CONTROLLER = {
    status:false,
    status_code:500,
    message: "Não foi possível processar a requisição devido a um erro interno no servidor [CONTROLLER]"
}

const ERROR_CONTENT_TYPE = {
    status:false,
    status_code:415,
    message: "Não foi possível processar a requisição, pois o formato de dados encaminhad não é suportado pelo servidor. Apenas deve ser utilizado o formato JSON"
}

//Mensagens de SUCESSO do projeto de filmes
const SUCESS_CREATED_ITEM = {
    status:true,
    status_code: 201,
    message:"Item inserido com sucesso"
}

module.exports = {
    DEFAULT_MESSAGE,
    ERROR_BAD_REQUEST,
    SUCESS_CREATED_ITEM,
    INTERNAL_SERVER_ERROR_MODEL,
    INTERNAL_SERVER_ERROR_CONTROLLER,
    ERROR_CONTENT_TYPE
}