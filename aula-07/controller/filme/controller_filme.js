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
const { json } = require("body-parser")

//Função para inserir um novo filme
async function inserirNovoFilme(filme, contentType) {

    //Cria uma cópia dos JSON do arquivo de configuração de mensagens
    let customMessage = JSON.parse(JSON.stringify(configMessages))

    try {
        if (String(contentType).toLowerCase() == "application/json") {
            //Chama a função para ela validar a entrada dos dados do filme
            let validar = await validarDados(filme)

            //Retorna um JSON de erro caso algum atributo seja inválido,
            //Se não, retorna um false (Não teve erro)
            if (validar) {
                return validar //Aqui ele retorna um 400
            } else {
                //Encaminha os dados do filme para o DAO inserir no banco de dados
                let result = await FilmeDAO.insertFilme(filme)

                if (result) { //201
                    customMessage.DEFAULT_MESSAGE.status = customMessage.SUCESS_CREATED_ITEM.status
                    customMessage.DEFAULT_MESSAGE.status_code = customMessage.SUCESS_CREATED_ITEM.status_code
                    customMessage.DEFAULT_MESSAGE.message = customMessage.SUCESS_CREATED_ITEM.message

                    return customMessage.DEFAULT_MESSAGE

                } else { 
                    return customMessage.INTERNAL_SERVER_ERROR_MODEL // erro 500 (Model)
                }
            }
        } else {
            return customMessage.ERROR_CONTENT_TYPE
        }

    } catch (error) {
        return customMessage.INTERNAL_SERVER_ERROR_CONTROLLER // 500 (Controller)
    }


}

//Função para atualizar um filme existente
async function atualizarFilme() {

}

//Função para retornar todos os filmes existentes
async function listarFilmes() {

    let customMessage = JSON.parse(JSON.stringify(configMessages))

    try {
        //Chama a funçap para retirnar a lista de todos os filmes
        let result = await FilmeDAO.selectAllFilme()

        //Validação para veificar se o DAO conseguiu processar o script no BD
        if(result){
            //Validação para verificar se o conteúdo do array tem dados de retorno
            //Ou se está vazia
            if (result.length > 0) {
                customMessage.DEFAULT_MESSAGE.status = customMessage.SUCESS_RESPONSE.status
                customMessage.DEFAULT_MESSAGE.status_code = customMessage.SUCESS_RESPONSE.status_code
                customMessage.DEFAULT_MESSAGE.response.count = result.length
                customMessage.DEFAULT_MESSAGE.response.filme = result

                return customMessage.DEFAULT_MESSAGE // 200
            }else{
                return customMessage.ERROR_NOT_FOUND // 404
            }
        }else{
            return customMessage.INTERNAL_SERVER_ERROR_MODEL // 500 model
        }
            
    } catch (error) {
        return customMessage.INTERNAL_SERVER_ERROR_CONTROLLER // 500 controller
    }
}

//Função para retornar um filme filtrando pelo ID
async function buscarFilme(id) {
    let customMessage = JSON.parse(JSON.stringify(configMessages))

    try {
        //Validação para garantir que o id seja um número válido
        if(String(id).replaceAll(" ", "") == '' || id == null || id == undefined || isNaN(id)){
            customMessage.ERROR_BAD_REQUEST.field = "[ID] INVÁLIDO"
            return customMessage.ERROR_BAD_REQUEST // 400
        }else{
            let result = await FilmeDAO.selectByIdFilme(id)

            if(result){
                //Verifica se houve algum dado retornado do DAO ou um false (erro)
                if(result.length > 0){
                    customMessage.DEFAULT_MESSAGE.status = customMessage.SUCESS_RESPONSE.status
                    customMessage.DEFAULT_MESSAGE.status_code = customMessage.SUCESS_RESPONSE.status_code
                    customMessage.DEFAULT_MESSAGE.response.filme = result

                    return customMessage.DEFAULT_MESSAGE //200 
                }else{
                    return customMessage.ERROR_NOT_FOUND //404
                }
            }else{
                return customMessage.INTERNAL_SERVER_ERROR_MODEL
            }
        }
    } catch (error) {
        return customMessage.INTERNAL_SERVER_ERROR_CONTROLLER // 500 (controller)
    }
}

//Função para excluir um filme
async function excluirFilme() {

}


async function validarDados(filme) {

    //Cria uma cópia dos JSON do arquivo de configuração de mensagens
    let customMessage = JSON.parse(JSON.stringify(configMessages))

    if (filme.nome == undefined || filme.nome == null || filme.nome == "" || filme.nome.length > 80) {
        customMessage.ERROR_BAD_REQUEST.field = "[NOME] INVÁLIDO"
        return customMessage.ERROR_BAD_REQUEST
    } else if (filme.sinopse == undefined || filme.sinopse == null || filme.sinopse == "") {
        customMessage.ERROR_BAD_REQUEST.field = "[SINOPSE] INVÁLIDO"
        return customMessage.ERROR_BAD_REQUEST
    } else if (filme.capa == undefined || filme.capa == null || filme.capa == "" || filme.capa.length > 255) {
        customMessage.ERROR_BAD_REQUEST.field = "[CAPA] INVÁLIDO"
        return customMessage.ERROR_BAD_REQUEST
    } else if (filme.data_lancamento == undefined || filme.data_lancamento == null || filme.data_lancamento == "" || filme.data_lancamento.length != 10) {
        customMessage.ERROR_BAD_REQUEST.field = "[DATA DE LANÇAMENTO] INVÁLIDO"
        return customMessage.ERROR_BAD_REQUEST
    } else if (filme.duracao == undefined || filme.duracao == null || filme.duracao == "" || filme.duracao.length < 5) {
        customMessage.ERROR_BAD_REQUEST.field = "[DURAÇÃO] INVÁLIDO"
        return customMessage.ERROR_BAD_REQUEST
    } else if (filme.valor == undefined || isNaN(filme.valor) || filme.valor.length > 5) {
        customMessage.ERROR_BAD_REQUEST.field = "[VALOR] INVÁLIDO"
        return customMessage.ERROR_BAD_REQUEST
    } else if (filme.avaliacao == undefined || isNaN(filme.avaliacao) || filme.avaliacao > 3 || filme.avaliacao.length > 3) {
        customMessage.ERROR_BAD_REQUEST.field = "[AVALIAÇÃO] INVÁLIDO"
        return customMessage.ERROR_BAD_REQUEST
    } else {
        return false
    }
}

module.exports = {
    inserirNovoFilme,
    atualizarFilme,
    listarFilmes,
    buscarFilme,
    excluirFilme
}