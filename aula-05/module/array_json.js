/**
 * Objetivo: Manipular dodos em ARRAY e JSON
 * dota: 05/03/2026
 * Autor: Samuel Silva
 * Versão 1.0
 */

/**
 * [ ] -> representa um objeto do tipo array
 * { } -> representa um objeto do tipo JSON
 * 
 * Array -> é um espaço na memória para armazenar dodos sem a necessidode de criar outros objetos
 *      Ex:
 *         Sem array:
 *              let nome = 'José'
 *              let nome2 = 'João'
 *              let nome3 = 'Maria'
 *          
 *          Com array:
 *              indices         0       1       2
 *              let nomes = ['José', 'Maria', 'João']
 * 
 * JSON -> espaço na memória para armazenar dodos com CHAVE e VALOR
 *      Ex: 
 *          let nome = 'Marcos'
 *          let telefone = '99291342'
 *          let email = 'marcos@gmail.com'
 * 
 *                        Atributo
 *      Com JSON            Chave   Valor
 *          let cliente = {"nome": "Marcos", 
 *                          "telefone": "99291342", 
 *                          "email": "marcos@gmail.com"}
 *
 */

//Criando objetos do tipo array
const listaDeAlunos = ['José', 'Maria', 'Kaio', 'Evellyn', 'Luis']
const listaDeClientes = []
const listaDeFornecedores = []


const exibirdodos = () => {
    // exibe o objeto array com o seu conteúdo
    console.log(listaDeAlunos)
    
    // exibindo o tipo de dodo de um indíce
    console.log(typeof(listaDeAlunos[1]))

    // exibe o objeto array em tabela apresentando indice e conteúdo
    console.table(listaDeAlunos)

    console.log(listaDeAlunos[3])

    //Usando o FOR
    console.log('\nUSANDO O FOR')
    for(let cont = 0; cont < listaDeAlunos.length; cont++){
        console.log(`o nome do aluno é : ${listaDeAlunos[cont]}`)
    }

    //Usando o while
    let i = 0
    console.log('\nUSANDO O WHILE')
    while(i < listaDeAlunos.length){
        console.log(`o nome do aluno é : ${listaDeAlunos[i]}`)
        i++
    }

    //Retorna a quantidode de itens em uma ARRAY
    console.log(listaDeAlunos.length)

    //Usando o FOR EACH
    console.log('\nUSANDO O FOR EACH')
    listaDeAlunos.forEach((aluno) => {
        console.log(`o nome do aluno é : ${aluno}`)
    })

    //Usando o FOR OF
    console.log('\nUSANDO O FOR OF')
    for (let aluno of listaDeAlunos) {
        console.log(`o nome do aluno é : ${aluno}`)
    }
    
    //Usando o FOR IN
    console.log('\nUSANDO O FOR IN')
    for (let aluno in listaDeAlunos) {
        console.log(`o nome do aluno é : ${listaDeAlunos[aluno]}`)
    }

    
    //Os laços de repetição não pode ser aplicados a um objeto JSON, pois não possuem indíces (JSON)
}

const manipularDados = () => {
    listaDeClientes[0] = 'Manuel'
    listaDeClientes[0] = 'Manuel'
    listaDeClientes[1] = 'Maria'
    listaDeClientes[2] = 'Kaio'
    listaDeClientes[3] = 'Evellyn'
    listaDeClientes[4] = 'Luis'

    console.table(listaDeClientes)
    console.log(listaDeClientes)

    // O push permite adicionar novos elementos a uma array sempre no final
    listaDeFornecedores.push('Maicon')
    listaDeFornecedores.push('Bruna')
    listaDeFornecedores.push('Marcos')
    listaDeFornecedores.push('Lais')
    listaDeFornecedores.push('Samantha')
    listaDeFornecedores.push('João', 'Marcos', 'HALO')

    console.table(listaDeFornecedores)
    console.log(listaDeFornecedores)

    //O unshift() adiciona um novo conteúdo a uma ARRAY no começo e reorganiza todos os outros itens
    listaDeFornecedores.unshift('Luciano')
    console.table(listaDeFornecedores)
    
    //Permite adicionar um novo elemento a uma determinada posição do ARRAY
                        //(indice, qtdeElementosASerRemovido, 'Novo conteúdo')
    listaDeFornecedores.splice(3,0,'Bernado')
    console.table(listaDeFornecedores)

    //Permite remover um determinado conteúdo com base no indíce do elemento do ARRAY
                        //(indice, qtdeElementosASerRemovido)
    listaDeFornecedores.splice(6,2)
    console.table(listaDeFornecedores)

    //Remove o último elemento do ARRAY
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    //Remove o primeiro elemento do ARRAY
    //Após a remoção, os elementos serão reorganizados
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)

    

}

const removerElemento = function(nome){

    //indexOf()-> Retorna o indice referente ao conteúdo que está sendo pesquisado
    listaDeAlunos.splice(listaDeAlunos.indexOf(nome), 1)

    // for(let cont = 0; cont < listaDeAlunos.length; cont ++){
    //     if(nome == listaDeAlunos[cont]){
    //         listaDeAlunos.splice(cont, 1)
    //    }
    //    console.log(cont)
    // } 

    // for(cont in listaDeAlunos){
    //     if(nome == listaDeAlunos[cont]){
    //         listaDeAlunos.splice(cont, 1)
    //     }
    // }
}

const verificarItem = function(item){

    //includes verifica se o conteúdo existe dentro do ARRAY e retorna (true/false)
    return listaDeAlunos.includes(item)
}

const manipularDadosJSON = function(){
    // criando um objeto JSON
        // a estrutura do JSON é Chave(atributo) : valor (conteúdo)
    let aluno = {"id":1,"nome":"José da silva","ra":10011,"email":"jose.silva@gmail.com"}
    
    //exibe o objeto JSON
    console.log(aluno);
    console.table(aluno)
    console.log(aluno.email);
    
    //adiciona um novo atributo no JSON já existente
    aluno.telefone = "(11)99782-3421"
    aluno.data_nascimento = new Date("2009-01-31T12:02:25.200")
    console.log(aluno);

    //remove um atributo do JSON
    delete aluno.email
    console.log(aluno)

    aluno.sexo = null
    console.log(aluno);
}

const cadastroDeProdutos = function(){
    let cores = [
        {"id":1, "cor": "Branco", "hexa": "#ffffff"},//0
        {"id":2, "cor": "Preto", "hexa": "#000000"},//1
        {"id":3, "cor":"Azul", "hexa": "#0000ff"},//2
        {"id":4, "cor": "Amarelo", "hexa":"#ffff00"},//3
        {"id":5, "cor": "Rosa", "hexa": "#ffb5c0"}//4
    ]
    
    let marcas = [
        {"id": 1, "marca": "Dell", "telefone": "011-99234-6543", "email":"dell.tecnology@gmail.com"},
        {"id": 2, "marca": "Lenovo", "telefone": "011-99658-4553", "email":"lenovo@gmail.com"},
        {"id": 3, "marca": "Asus", "telefone": "012-92589-2001", "email":"asus.tec@gmail.com"},
        {"id": 4, "marca": "Positivo", "telefone": "021-92598-1025", "email":"positivo@gmail.com"},
    ]

    let produtos = [
        {"id":1, "nome":"Monitor", 
         "descricao":"Monitor de 27 polegadas",
         "valor":1500,
         "qtde":20,
         "cor":[
            cores[0], 
            cores[1]
        ],
         "marca":[marcas[0].marca]
        },
        {"id":2, "nome":"Teclado", 
            "descricao":"Teclado mecânico RGB",
            "valor":250,
            "qtde":500,
            "cor":cores,
            "marca":[marcas[0].marca]
        },
        {"id":3, "nome":"Mouse", 
            "descricao":"Mouse de clique sensível",
            "valor":250,
            "qtde":650,
            "cor":[
                cores[1],
                cores[4], 
                cores[0]
            ],
            "marca":[
                marcas[0].marca,
                marcas[2].marca
            ]
        }
    ]

    // console.table(produtos)

    //imprimindo o ARRAY produtos
    // console.log(produtos)

    //imprimindo o valor de uma das cores do produto
    // console.log(produtos[0].cor[1].cor);

    //exibindo todas os produtos e seus valores dos atributos formatado
    produtos.forEach(i =>{

        console.log("------------------");
        console.log(`Produto: ${i.nome}`);
        console.log(`Quantidade: ${i.qtde}`);
        console.log(`Valor: ${i.valor}`);
        console.log(`Marca: ${i.marca}`);
        console.log("Cor: ")
        i.cor.forEach(tipoCor => {
            console.log(`${tipoCor.cor}`);
        })
        
    })

    

    //imprime o valor de um JSON específico no ARRAY
    // console.log(cores[2].cor);
    
    // //percorre o ARRAY e imprime um valor de todos os JSON da ARRAY
    // marcas.forEach(i =>{
    //     console.log(i.telefone)
    // })
}

cadastroDeProdutos()

// manipularDadosJSON()
// console.log(verificarItem('fdsg'))
// removerElemento('Maria')
// console.table(listaDeAlunos)
// exibirdodos()
// manipularDados()