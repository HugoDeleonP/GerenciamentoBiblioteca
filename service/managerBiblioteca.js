import { digitaAnoPublicacao, digitaAutor, digitaGenero, digitaTitulo, livros_toString} from '../view/userInterface.js';
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

    const titulo = digitaTitulo();
    const autor = digitaAutor();
    const ano = digitaAnoPublicacao();
    const genero = digitaGenero();
    
    livro = new Livro(titulo, autor, ano, genero);

    livros.push(livro);
}

export function listaLivro() {
    console.table(livros, ["titulo", "autor", "anoPublicacao", "genero", "disponibilidade"]);
}

export function buscaLivro_titulo(){
    //Deve ser possível buscar um livro no catálogo pelo seu título (não deve diferenciar maiúsculas e minúsculas).
    const titulo = digitaTitulo();
    for(let key in livro){
        if(key == livro.titulo){
            livros_toString(numero, valor);
        }
    }
}

export function editaLivro(){
    //O sistema deve permitir a edição das informações de um livro (título, autor, ano de publicação ou gênero) com base no seu id.

}

export function alteraDisponibilidade(){
    //O sistema deve permitir alterar a disponibilidade de um livro (marcar como emprestado ou disponível) com base no seu id.
}

export function removeLivro(){
    //O sistema deve permitir a remoção de um livro do catálogo com base no seu id.
}