import { colors } from "./util/Colors";
import { Input } from "./util/Input";


export function main(){
   
    let opcao:number;
   
    while(true){
        console.log( colors.fg.yellow, 
                     "***************************************")
        console.log("                                         ")
        console.log("           LIVRARIA CORUJA               ")
        console.log("                                         ")
        console.log(" ****************************************")
        console.log("                                         ")
        console.log("[1] LISTAR TODOS OS PRODUTOS             ")
        console.log("[2] LISTAR PRODUTO POR ID                ")
        console.log("[3] CADASTRAR PRODUTO                    ")
        console.log("[4] ATUALIZAR PRODUTO                    ")
        console.log("[5] DELETAR PRODUTO                      ")
        console.log("[0] SAIR                                 ")
        console.log("                                         ")
        console.log("*****************************************")
        console.log("                                         ",
            colors.reset)

        console.log("Entre com a opção desejada: ")
        opcao = Input.questionInt("")

        if(opcao === 0){
            console.log("\nSaindo do sistema...")
            console.log("LIVRARIA CORUJA")
            sobre()
            process.exit(0)
        }

        switch(opcao){
            case 1:
                console.log(colors.fg.yellow,"\nLISTAR TODOS OS PRODUTOS", colors.reset )
                
                keyPress()
                break
            case 2:
                console.log(colors.fg.yellow,"\nLISTAR PRODUTO POR ID", colors.reset )
               
                keyPress()
                break
            case 3:
                console.log(colors.fg.yellow,"\nCADASTRAR PRODUTO", colors.reset )
                
                keyPress()
                break
            case 4:
                console.log(colors.fg.yellow,"\nATUALIZAR PRODUTO", colors.reset)
               
                keyPress()
                break
            case 5:
                console.log(colors.fg.yellow,"\nDELETAR UM PRODUTO", colors.reset)
                
                keyPress()
                break
            default:
                console.log("Opção inválida")
        }
    }
}

//funcao para exibir os dados do dev
export function sobre():void{
    console.log(colors.fg.magentastrong)
    console.log("----------------------------------------------------")
    console.log("Projeto desenvolvido por: ")
    console.log("Clarisse Rodrigues")
    console.log("clarissebleasby@gmail.com")
    console.log("https://github.com/clarodriguess")
    console.log("-----------------------------------------------------")
    console.log(colors.reset)
}

//Funcao para fazer uma pausa entra as opcoes do menu
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    Input.prompt();
}

main()