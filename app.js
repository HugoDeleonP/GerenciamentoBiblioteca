//lógica principal
import { menuPrincipal } from "./view/userInterface.js";
import { rotaMenu } from "./controller/routerBiblioteca.js";

let escolha = -1;

do{
    escolha = menuPrincipal();
    rotaMenu(escolha);
}while(escolha != 0);