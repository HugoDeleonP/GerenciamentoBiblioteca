import { buscaLivro_titulo, criaLivro, editaLivro, listaLivro, alteraDisponibilidade, removeLivro } from "../service/managerBiblioteca.js";

export function rotaMenu(escolha){
    switch(escolha){
        case 1:
            criaLivro();
            break;
        case 2: 
            listaLivro();
            break
        case 3:
            buscaLivro_titulo();
            break;
        case 4:
            editaLivro();
            break;
        case 5:
            alteraDisponibilidade();
            break;
        case 6:
            removeLivro();
            break;

        case 0:
            console.log("Programa encerrando...");
            break;
    }
}