/*******************************************************************
 * Objetivo: arquivo responsável pelo CRUD de dados do filme no banco
 * de dados MySQL
 * Data:15/02/2026
 * Autor: Samuel Silva Moreira Dos Santos
 * Versão:1.0
 *******************************************************************/

//Função para inserir um novo filme no banco de dados
async function insertFilme(filme) {
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
        '${filme.avaliacao}'
    );
    `
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