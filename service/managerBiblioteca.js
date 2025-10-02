import { digitaAnoPublicacao, digitaAutor, digitaGenero, digitaTitulo, digitaId, alteraDisponibilidadeMenu, editarLivroMenu} from '../view/userInterface.js';
import { Livro } from '../model/livro.js';

let livros = [];
let livro = new Livro;

export function criaLivro(){
    /*
    O sistema deve permitir a inclusão de um novo livro no catálogo, com as informações de:
    Título
    Autor
    Ano de publicação
    Gênero
    Disponibilidade (inicialmente, todos os livros são adicionados como disponíveis).
    */
    let id = Math.floor(Math.random() * 10000);
    let titulo = digitaTitulo();
    let autor = digitaAutor();
    let ano = digitaAnoPublicacao();
    let genero = digitaGenero();
    
    livro = new Livro(id, titulo, autor, ano, genero);

    livros.push(livro);
}

export function listaLivro() {

    livros.forEach(function(element, index) {
        console.log(`Livro ${index + 1}-`);
        for(let key in livro){
            console.log(`${key}: ${element[key]}`);
        }
    });
    
}

export function buscaLivro_titulo(){
    //Deve ser possível buscar um livro no catálogo pelo seu título (não deve diferenciar maiúsculas e minúsculas).
    const tituloDigitado = digitaTitulo();

    let tituloEncontrado = livros.filter(function(element){
        for(let key in livro){
            if(element.titulo === tituloDigitado){
                console.log("Livro encontrado: ");
                return `Livro encontrado: ${key}: ${element[key]}`
            }
        }
    });

    console.log(tituloEncontrado);
}

export function editaLivro(){
    //O sistema deve permitir a edição das informações de um livro (título, autor, ano de publicação ou gênero) com base no seu id.
    console.log("Escolha o livro: ");
    listaLivro();
    let idDigitado = digitaId();

    let edicao = livros.filter(function(element){
        for(let key in livro){
            if(element.id == idDigitado){
                routerEditaLivro(editarLivroMenu(), livro);
                return `Livro alterado: ${key}: ${element[key]}`
            }
        }
    });

    console.log(edicao);
}

function routerEditaLivro(escolha, livro){
    switch(escolha){
        case 1:
            livro.titulo = digitaTitulo();
            break;

        case 2:
            livro.autor = digitaAutor();
            break;

        case 3:
            livro.ano = digitaAnoPublicacao();
            break;
        case 4:
            livro.genero = digitaGenero();
            break;
    }
}

export function alteraDisponibilidade(){
    //O sistema deve permitir alterar a disponibilidade de um livro (marcar como emprestado ou disponível) com base no seu id.
    console.log("Escolha o livro: ");
    listaLivro();
    let idDigitado = digitaId();

    let disponibilidade = livros.filter(function(element){
        for(let key in livro){
            if(element.id == idDigitado){
                routerAlteraDisponibilidade(alteraDisponibilidadeMenu(), livro);
                return `Livro alterado: ${key}: ${element[key]}`
            }
        }
    });

    console.log(disponibilidade);
}

function routerAlteraDisponibilidade(escolha, livro){
    switch(escolha){
        case 1:
            livro.disponibilidade = "Emprestada";
            break;
        

        case 2:
            livro.disponibilidade = "Disponível";
            break;
        
    }
}

export function removeLivro(){
    //O sistema deve permitir a remoção de um livro do catálogo com base no seu id.

    console.log("Escolha o livro: ");
    listaLivro();
    let idDigitado = digitaId();

    let remocao = livros.filter(function(element){
        if(element.id == idDigitado){
            livros.splice(0, element.id);
            return `Livro removido do sistema!`;
        }
    })

    console.log(remocao);
}