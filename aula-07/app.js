
//import das dependências para criar a API

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const bodyParserJSON = bodyParser.json

//Criando um objeto do express para criar uma API
const app = express()

//Configurações do CORS da API
const corsOptions = {
    origin: ["*"], // Configuração de origem e domínio da requisição (IP ou domínio)
    methods: 'GET, POST, PUT, DELETE, OPTIONS', //Configuração dos métodos que serão utilizados na API
    allowedHeaders: ['Content-type', 'Authorization'] // Configurações de permissões
    //Tipo de dados //Autorização de acesso
}

//Aplica as configurações do CORS no app (EXPRESS)
app.use(cors(corsOptions))

//Import das CONTROLLER do projeto
const controllerFilme = require("./controller/filme/controller_filme.js")

//ENDPOINTS

app.post("/v1/senai/locadora/filme", bodyParserJSON, async (request, response) => {
    //Recebendo o body da requisição 
    let dados = request.body

    let result = await controllerFilme.inserirNovoFilme(dados)
    
    response.status(result.status_code)
    response.json(result)
})


//Fazer o start na API (aguardando as requisições)
app.listen(8080, () => {
    console.log("API aguardando novas requisições...");
})