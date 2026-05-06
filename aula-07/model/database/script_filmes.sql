#Permite criar um database
create database db_filmes_20261_b;

#Permite visualizar todos os databases esxistentes
show databases;

#Permite escolher o database a ser utilizado
use db_filmes_20261_b;


#Permite visualizar todas as tabelas existentes dentro do database
show tables;

#Criando uma tabela e definindo seus atributos e tipos de dados
create table tbl_filme (
	id 						int not null auto_increment primary key,
    nome 					varchar(80) not null,
    sinopse 				text not null,
    capa 					varchar(255) not null,
    data_lancamento 		date not null,
	duracao 				time not null,
    valor 					decimal(5,2) default 0,
    avaliacao 				decimal (3,2) default null
);

#Permite excluir todos os dados de uma tabela
#drop table tbl_filme; 

insert into tbl_filme (
	nome,
	sinopse,
    capa,
    data_lancamento,
    duracao,
    valor,
    avaliacao
) values (
	replace("Super ' Mario Galaxy: O Filme", "'", ""),
    'Uma nova aventura leva Mario a enfrentar um inédito e ameaçador super vilão. Em Super Mario Galaxy: O Filme, o bigodudo encanador italiano e seus aliados embarcam numa aventura galáctica repleta de ação e momentos emocionantes depois de salvar o Reino dos Cogumelos.',
    'https://br.web.img3.acsta.net/c_310_420/img/5b/ea/5bea1aeac3323aeaaf82449a34fafbbf.jpg',
    '2026-04-02',
    '01:39:00',
    '50.60',
    '3.0'
);

select * from tbl_filme order by id desc;
select * from tbl_filme where id = 41;

#delete from tbl_filme where id > 0; comando para deletar registros em uma tabela

#update tbl_filme set nome = 'bilu2',sinopse = 'testtesttest',capa = 'testsadf',data_lancamento = '1986-04-09',duracao = '12:00:00',valor = '200' where id = 44;