export class Livro{
    constructor(id, titulo, autor, anoPublicacao, genero, disponibilidade){
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
        this.disponibilidade = "Disponível";
    }
}