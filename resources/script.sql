create database biblioteca;

use biblioteca;

create table livro(
id int auto_increment primary key,
titulo varchar(45) not null,
autor varchar(50) not null,
ano int not null,
genero varchar(50) not null
);

select * from livro;