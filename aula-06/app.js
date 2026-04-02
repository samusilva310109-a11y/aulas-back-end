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
    

    if(estados){
        response.status(200) //Requisição bem-sucedida
        response.json(estados)
    }else{
        response.status(500)
        response.json({"message":"Não foi possível encontrar a lista de estados"})
    }

})

//Retorna os dados de um estado filtrando pela sigla do estado
app.get('/v1/senai/dados/estado/:uf', (request, response) => {
    let sigla = request.params.uf
    let estado = estadosCidades.getDadosEstados(sigla)
    if (estado) {
        response.status(200) 
        response.json(estado)
    }else{
        response.status(404)
        response.json({"message":"Nenhum estado encontrado"})
    }
    
    
})

//Retorna a capital de estados filtrando pela sigla do estado
app.get("/v1/senai/capital/estado/:uf", (request, response) => {
    let sigla = request.params.uf
    let capitalEstado = estadosCidades.getCapitalEstado(sigla)

    if(capitalEstado){
        response.status(200)  
        response.json(capitalEstado)
    }else{
        response.status(404)
        response.json({"message":"Nenhum estado encontrado"})
    }
    
    
})

//Retorna uma lista de estados filtrando pela região
app.get("/v1/senai/estados/regiao/:regiao", (request, response) => {
    let nomeRegiao= request.params.regiao
    let regiao = estadosCidades.getEstadosRegiao(nomeRegiao)

    if(regiao){
        response.status(200) 
        response.json(regiao) 
    }else{
        response.status(404)
        response.json({"message":"Nenhuma região encontrada"})
    }
    
    
})

//Retorna dados das antigas caapitais e atual capital do Brasil
app.get("/v1/senai/estado/capital/pais/brasil", (request, response) => {
    let capitais = estadosCidades.getCapitalPais()

    if(capitais){
        response.status(200)  
        response.json(capitais)
    }else{
        response.status(500)
        response.json({"message":"Não foi possível encontrar as capitais do país"})
    }
    
    
})

//Retorna as cidades de um estado filtrando pela sigla do estado
app.get("/v1/senai/cidades/estado", (request, response) => {
    
    const {estado} = request.query
    const cidade = estadosCidades.getCidades(estado)

    if (cidade) {
        response.status(200)
        response.send(cidade)
    }else{
        response.status(404)
        response.json({"message":"Nenhuma cidade encontrada"})
    }
    
})

app.get("/v1/senai/doc", (request, response) => {
    let docAPI = {
        "api-description":"API para manipular dados de Estados e Cidades",
        "date":"2026/04/02",
        "development":"Samuel Silva Moreira Dos Santos",
        "version":1.0,
        "endpoints":[
            {"rota1":"/v1/senai/estados",
             "description":"Retorna a lista de todos os estados"
            },
            {"rota2":"/v1/senai/dados/estado/sp",
                "description":"Retorna dados de um estado filtrando pela sigla"
            },
            {"rota3":"/v1/senai/capital/estado/:uf",
                "description":"Retorna a capital de estados filtrando pela sigla do estado"
            },
            {"rota4":"/v1/senai/estados/regiao/:regiao",
                "description":"Retorna uma lista de estados filtrando pela região"
            },
            {"rota5":"/v1/senai/estado/capital/pais/brasil",
                "description":"Retorna dados das antigas capitais e atual capital do Brasil"
            },
            {"rota6":"/v1/senai/cidades/estado",
                "description":"Retorna as cidades de um estado filtrando pela sigla do estado"
            }
        ]
    }

    response.status(200)
    response.json(docAPI)
})

//Fazer o start na API (aguardando as requisições)
app.listen(8080, () => {
    console.log("API aguardando novas requisições...");
})