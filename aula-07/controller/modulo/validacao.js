const configMessages = require("../modulo/configMessage.js")

async function validarInputs(filme, result) {
        
    
        //Cria uma cópia dos JSON do arquivo de configuração de mensagens
        let customMessage = JSON.parse(JSON.stringify(configMessages))
    
        if(filme.nome == undefined || filme.nome == null || filme.nome == "" || filme.nome.length > 80){
            customMessage.ERROR_BAD_REQUEST.field = "[NOME] INVÁLIDO"
            return customMessage.ERROR_BAD_REQUEST
        }else if (filme.sinopse == undefined || filme.sinopse == null || filme.sinopse == "") {
            customMessage.ERROR_BAD_REQUEST.field = "[SINOPSE] INVÁLIDO"
            return customMessage.ERROR_BAD_REQUEST
        } else if (filme.capa == undefined || filme.capa == null || filme.capa == "" || filme.capa.length > 255){
            customMessage.ERROR_BAD_REQUEST.field = "[CAPA] INVÁLIDO"
            return customMessage.ERROR_BAD_REQUEST
        }else if (filme.data_lancamento == undefined || filme.data_lancamento == null || filme.data_lancamento == "" || filme.data_lancamento.length != 10) {
            customMessage.ERROR_BAD_REQUEST.field = "[DATA DE LANÇAMENTO] INVÁLIDO"
            return customMessage.ERROR_BAD_REQUEST
        } else if (filme.duracao == undefined || filme.duracao == null || filme.duracao == "" || filme.duracao.length < 5){
            customMessage.ERROR_BAD_REQUEST.field = "[DURAÇÃO] INVÁLIDO"
            return customMessage.ERROR_BAD_REQUEST
        }else if (filme.valor == undefined || isNaN(filme.valor) || filme.valor.length > 5){
            customMessage.ERROR_BAD_REQUEST.field = "[VALOR] INVÁLIDO"
            return customMessage.ERROR_BAD_REQUEST
        }else if (filme.avaliacao == undefined || isNaN(filme.avaliacao) == null || filme.avaliacao.length > 3){
            customMessage.ERROR_BAD_REQUEST.field = "[AVALIAÇÃO] INVÁLIDO"
            return customMessage.ERROR_BAD_REQUEST
        }else{
           
            if (result) {
                customMessage.DEFAULT_MESSAGE.status = customMessage.SUCESS_CREATED_ITEM.status
                customMessage.DEFAULT_MESSAGE.status_code = customMessage.SUCESS_CREATED_ITEM.status_code
                customMessage.DEFAULT_MESSAGE.message = customMessage.SUCESS_CREATED_ITEM.message
            }else{
                customMessage.DEFAULT_MESSAGE.status = customMessage.INTERNAL_SERVER_ERROR_MODEL.status
                customMessage.DEFAULT_MESSAGE.status_code = customMessage.INTERNAL_SERVER_ERROR_MODEL.status_code
                customMessage.DEFAULT_MESSAGE.message = customMessage.INTERNAL_SERVER_ERROR_MODEL.message
            }

            return customMessage.DEFAULT_MESSAGE
        }
}

module.exports = {
    validarInputs,
}