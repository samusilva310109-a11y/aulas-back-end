/************************************************************************************
 * Objetivo: Arquivo responsável pela criação da API do projeto de Estados e Cidades
 * Data: 01/04/2026
 * Autor: Samuel Silva Moreira Dos Santos
 * Versão: 1.0 
 ************************************************************************************/

/**
 * Para configurar a API é necessário:
 *  Instalar o EXPRESS -> npm install express --save
 *      O que é o express?  
 *          É uma dependência para configurar e utilizar o protocolo HTTP para criar a API
 *      
 *      Por quê o --save -> para registrar a instalação 
 *      Por quê a ^ na versão da dependência -> ela indica ao servidor que a dependencia 
 *          deve possui determinada versão ou superior
 * 
 *  Instalar o CORS -> npm install cors --save
 *      
 *      O CORS é responsável por configurar as permissões de acesso da API
 * 
 *  Origem da requisição (quem está querendo falar com a API (remetente))
 */

//import das dependências para criar a API

const express = require("express")
const cors = require("cors")

//Criando um objeto do express para criar uma API
const app = express()

//Configurações do CORS da API
const corsOptions = {
    origin: ["*"], // Configuração de origem e domínio da requisição (IP ou domínio)
    methods: 'GET', //Configuração dos métodos que serão utilizados na API
    allowedHeaders: ['Content-type','Authorization'] // Configurações de permissões
                     //Tipo de dados //Autorização de acesso
}

//Aplica as configurações do CORS no app (EXPRESS)
app.use(cors(corsOptions))

//Import das funções
const estadosCidades = require("./modulo/funcoes.js")

//Endpoint para listar os estados
app.get("/v1/senai/estados",(request, response) => {
    let estados = estadosCidades.getListaEstados()
    response.json(estados)
    response.status(200) //Requisição bme-sucedida
})

app.get('/v1/senai/dados/estado/:uf', (request, response) => {
    let sigla = request.params.uf
    let estado = estadosCidades.getDadosEstados(sigla)
    if (estado) {
        response.json(estado)
        response.status(200)  
    }else{
        response.json({"message":"Nenhum estado encontrado"})
        response.status(404)
    }
    
    
})

app.get("/v1/senai/capital/estado/:uf", (request, response) => {
    let sigla = request.params.uf
    let capitalEstado = estadosCidades.getCapitalEstado(sigla)

    if(capitalEstado){
        response.json(capitalEstado)
        response.status(200)  
    }else{
        response.json({"message":"Nenhum estado encontrado"})
        response.status(404)
    }
    
    
})

app.get("/v1/senai/estados/regiao/:regiao", (request, response) => {
    let nomeRegiao= request.params.regiao
    let regiao = estadosCidades.getEstadosRegiao(nomeRegiao)

    if(regiao){
        response.json(regiao)
        response.status(200)  
    }else{
        response.json({"message":"Nenhuma região encontrada"})
        response.status(404)
    }
    
    
})

app.get("/v1/senai/capital/pais", (request, response) => {
    let capitais = estadosCidades.getCapitalPais()

    if(capitais){
        response.json(capitais)
        response.status(200)  
    }else{
        response.json({"message":"Não foi possível encontrar as capitais do país"})
        response.status(500)
    }
    
    
})

app.get("/cidades", (request, response) => {
    const {estado} = request.query
    const cidade = estadosCidades.getCidades(estado)

    if (cidade) {
        response.send(cidade)
        response.status(200)
    }else{
        response.json({"message":"Nenhuma cidade encontrada"})
        response.status(404)
    }
    
})

//Fazer o start na API (aguardando as requisições)
app.listen(8080, () => {
    console.log("API aguardando novas requisições...");
})