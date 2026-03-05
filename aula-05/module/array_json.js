/**
 * Objetivo: Manipular dados em ARRAY e JSON
 * Data: 05/03/2026
 * Autor: Samuel Silva
 * Versão 1.0
 */

/**
 * [ ] -> representa um objeto do tipo array
 * { } -> representa um objeto do tipo JSON
 * 
 * Array -> é um espaço na memória para armazenar dados sem a necessidade de criar outros objetos
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
 * JSON -> espaço na memória para armazenar dados com CHAVE e VALOR
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

const exibirDados = () => {
    // exibe o objeto array com o seu conteúdo
    console.log(listaDeAlunos)
    
    // exibindo o tipo de dado de um indíce
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

    //Retorna a quantidade de itens em uma ARRAY
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

    
    //Os laços de repetição não pode ser aplicados a um objeto que não é um ARRAY
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

    listaDeFornecedores.push('Maicon')
    listaDeFornecedores.push('Bruna')
    listaDeFornecedores.push('Marcos')
    listaDeFornecedores.push('Lais')
    listaDeFornecedores.push('Samantha')
    listaDeFornecedores.push('João', 'Marcos', 'HALO')

    console.table(listaDeFornecedores)
    console.log(listaDeFornecedores)
    
    
}

exibirDados()
manipularDados()