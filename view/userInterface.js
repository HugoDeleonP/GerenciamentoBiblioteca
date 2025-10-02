import PromptSync from "prompt-sync";
const input = PromptSync();

export function menuPrincipal(){

    // Adicionar, listar, buscar (título), editar, alterar disponibilidade, remover
    // filtrar por disponibilidade, buscar (autor), filtrar por gênero, ordenar (anoPublicacao),
    //  listar livros disponíveis, registrar empréstimo, gerar relatório de empréstimo
    console.log("=====================| Sistema de gerenciamento de biblioteca |=====================");
    console.log(" 1- Adicionar livro");
    console.log(" 2- Listar livros");
    console.log(" 3- Buscar livro por título");
    console.log(" 4- Editar livro");
    console.log(" 5- Alterar disponibilidade de livro");
    console.log(" 6- Remover livro");

    console.log("\n 0- Sair");

    return parseInt(input("Digite uma opção disponível: "));
}

export function digitaId(){
    return parseInt(input("Digite o ID do livro: "));
}

export function digitaTitulo(){
    return input("Digite o título do livro: ");
}

export function digitaAutor(){
    return input("Digite o nome do autor: ");
}

export function digitaAnoPublicacao(){
    return parseInt(input("Digite o ano de publicação: "));
}

export function digitaGenero(){
    return input("Digite o gênero do livro: ");
}

export function livros_toString(index, livro){
    console.log(`${index}- ${livro}`);
}

export function alteraDisponibilidadeMenu(){
    console.log("=====================| Alteração de disponibilidade |=====================");
    console.log(" 1- Emprestada");
    console.log(" 2- Disponível");

    return parseInt(input("Digite uma opção disponível: "));
}

export function editarLivroMenu(){
    console.log("=====================| Alteração de disponibilidade |=====================");
    console.log(" 1- Título");
    console.log(" 2- Autor");
    console.log(" 3- Ano");
    console.log(" 4- Gênero");

    return parseInt(input("Digite uma opção disponível: "));
}

