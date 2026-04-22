/*******************************************************************
 * Objetivo: arquivo responsável pelo CRUD de dados do filme no banco
 * de dados MySQL
 * Data:15/02/2026
 * Autor: Samuel Silva Moreira Dos Santos
 * Versão:1.0
 *******************************************************************/

//Realiza import da biblioteca knex para manipular dados no banco de dados my sql
const knex = require('knex')

//Realiza import do arquivo de configuração do acesso ao banco dados
const knexDatabaseConfig = require('../../database_config/knexConfig.js')

//Criar a conexação com o BD MySQL conforme o arquivo de configuração
const knexConection = knex(knexDatabaseConfig.development)

//Função para inserir um novo filme no banco de dados
async function insertFilme(filme) {

    try {
        let sql = `
            insert into tbl_filme (
                nome,
                sinopse,
                capa,
                data_lancamento,
                duracao,
                valor,
                avaliacao
            ) values (
                '${filme.nome}',
                '${filme.sinopse}',
                '${filme.capa}',
                '${filme.data_lancamento}',
                '${filme.duracao}',
                '${filme.valor}',
                if('${filme.avaliacao}' = '', null, '${filme.avaliacao}')
            );
            `
        
        //Encaminha ao banco de dados o script sql
        let result = await knexConection.raw(sql)

        if(result)
            return true
        else 
            return false
        
    } catch (error) {
        return false
    }
    
    
}

//Função para atualizar um filme existente no banco de dados
async function updateFilme(filme) {
    
}

//Função para retornar todos os dados de filme do banco de dados
async function selectAllFilme() {
    
}

//Função para retornar os dados de um filme em específico filtrando pela chave primária (ID)
async function selectByIdFilme(id) {
    
}

//Função para excluir um filme em específico filtrando pela chave primária (ID)
async function deleteFilme(id) {
    
}

module.exports = {
    insertFilme,
    updateFilme,
    selectAllFilme,
    selectByIdFilme,
    deleteFilme
}