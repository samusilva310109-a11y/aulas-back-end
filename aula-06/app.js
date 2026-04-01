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
 */

//import das dependências para criar a API

const express = require("express")
const cors = require("cors")

//Criando um objeto do express para criar uma API
const app = express()

