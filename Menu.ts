import { ProdutoController } from "./src/controller/ProdutoController";
import { LivroDigital } from "./src/model/LivroDigital";
import { LivroFisico } from "./src/model/LivroFisico";
import { Produto } from "./src/model/Produto";
import { colors } from "./src/util/Colors";
import { Input } from "./src/util/Input";

//instancia da classe controller  (para guardar os dados da array listaProdutos)
    const produtos = new ProdutoController();

//criar um array contendo os tipos de conta (vai ser usado no cadastrar e no atualizar)
    const tipoProduto = ['Livro Fisico', 'Livro Digital']


export function main(){

    let opcao: number;
    criarProdutosTeste();
 
    //let opcao, id, tipo, preco, paginas, estoque, tamanhoMB :number;
    //let titulo, autor, editora, genero, formato : string;

    //testes
    //const produto : LivroFisico = new LivroFisico(1,"Neuromancer", "William Gibson", "leia", "Sci-fi", 1, 50, 555,2)
    //const produto2 : LivroDigital = new LivroDigital(2, "Blade Runner", "Philip K. Dick", "nova", "Sci-fi", 2, 25, 50, "pdf")
    // produto.visualizar();
    // produto2.visualizar();
   
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
                produtos.listarTodos()
                keyPress()
                break
            case 2:
                console.log(colors.fg.yellow,"\nLISTAR PRODUTO POR ID", colors.reset )
                listarProdutoPorId()
                keyPress()
                break
            case 3:
                console.log(colors.fg.yellow,"\nCADASTRAR PRODUTO", colors.reset )
                cadastrarProduto()
                keyPress()
                break
            case 4:
                console.log(colors.fg.yellow,"\nATUALIZAR PRODUTO", colors.reset)
                atualizarProduto()
                keyPress()
                break
            case 5:
                console.log(colors.fg.yellow,"\nDELETAR UM PRODUTO", colors.reset)
                deletarProduto()
                keyPress()
                break
            default:
                console.log("Opção inválida")
        }
    }
}

//case 2 - procurar por ID
function listarProdutoPorId(): void {
    console.log("Digite o ID do produto: ")
    const id = Input.questionInt("")
    produtos.listarPorId(id)
}

//case3 - cadastrar um produto
function cadastrarProduto(): void{
    console.log("Digite o titulo do livro: ")
    const titulo = Input.question("")

    console.log("Digite o autor do livro: ")
    const autor = Input.question("")
    
    console.log("Digite a editora do livro: ")
    const editora = Input.question("")
    
    console.log("Digite o genero do livro: ")
    const genero = Input.question("")

    console.log("Selecione o tipo do produto: ")
    const tipo = Input.keyInSelect(tipoProduto, "", { cancel: false }) +1;

    console.log("Digite o preco do livro: ")
    const preco = Input.questionFloat("")

    switch(tipo){
        case 1: //livro fisico
            console.log("Digite a quantidade de paginas: ")
            const paginas = Input.questionInt("")
            console.log("Digite a quantidade em estoque: ")
            const estoque = Input.questionInt("")
            produtos.cadastrar(new LivroFisico(produtos.gerarId(), titulo, autor, editora, genero, tipo, preco, paginas, estoque));
            break
        case 2: //livro digital
            console.log("Digite o tamanho do livro em MB: ")
            const tamanhoMB = Input.questionInt("")
            console.log("Digite o formato do livro: ")
            const formato = Input.question("")
            produtos.cadastrar(new LivroDigital(produtos.gerarId(), titulo, autor, editora, genero, tipo, preco, tamanhoMB, formato)
            );
            break       
    }
    
}

//case 4  -atualizar
function atualizarProduto(): void{
    console.log("Digite o ID do produto que deseja atualizar: ")
    const id = Input.questionInt("")
    const produto = produtos.buscarNoArray(id)

    if (produto !== null) {
        //guarda os dados atuais
        let titulo = produto.titulo
        let autor = produto.autor
        let editora = produto.editora
        let genero = produto.genero
        const tipo = produto.tipo
        let preco = produto.preco
        // let paginas = produto.paginas
        // let estoque = produto.estoque
        // let tamanhoMB = produto.tamanhoMB
        // let formato = produto.formato
        //titulo
        console.log(`Titulo atual: ${titulo}`)
        console.log("Digite o novo titulo:\n (Pressione ENTER para manter o valor atual)")
        let entrada = Input.question("");
        titulo = entrada.trim() === "" ? titulo : entrada;

        //autor
        console.log(`Autor atual: ${autor}`)
        console.log("Digite o novo autor:\n (Pressione ENTER para manter o valor atual)")
        entrada = Input.question("");
        autor = entrada.trim() === "" ? autor : entrada;

        //editora
        console.log(`Editora atual: ${editora}`)
        console.log("Digite a nova editora:\n (Pressione ENTER para manter o valor atual)")
        entrada = Input.question("");
        editora = entrada.trim() === "" ? editora : entrada;

        //genero
        console.log(`Genero atual: ${genero}`)
        console.log("Digite o novo genero:\n (Pressione ENTER para manter o valor atual)")
        entrada = Input.question("");
        genero = entrada.trim() === "" ? genero : entrada;

        //preco
        console.log(`Preço atual: ${preco}`)
        console.log("Digite o novo preço:\n (Pressione ENTER para manter o valor atual)")
        entrada = Input.question("");
        preco = entrada.trim() === "" ? preco : parseFloat(entrada.replace(",", "."));
        //parseFloat nao aceita virgulha -> precisa subtituir por ponto

        //verificar tipo de prod
        switch(tipo){
            case 1:
                let paginas = (produto as LivroFisico).paginas
                let estoque = (produto as LivroFisico).estoque
                //paginas
                console.log(`Numero de paginas atual: ${paginas}`)
                console.log("Digite a nova quantidade de paginas:\n (Pressione ENTER para manter o valor atual)")
                let entrada = Input.question("");
                paginas = entrada.trim() === "" ? paginas : parseInt(entrada)
                //estoque
                console.log(`Quantidade no estoque atual: ${estoque}`)
                console.log("Digite a nova quantidade no estoque:\n (Pressione ENTER para manter o valor atual)")
                entrada = Input.question("");
                estoque = entrada.trim() === "" ? estoque : parseInt(entrada)

                produtos.atualizar(new LivroFisico(id,titulo, autor, editora, genero, tipo, preco, paginas, estoque))
                break

            case 2:
                let tamanhoMB = (produto as LivroDigital).tamanhoMB
                let formato = (produto as LivroDigital).formato
                //tamanhoMB
                console.log(`Tamanho atual: ${tamanhoMB}`)
                console.log("Digite o novo tamanho em MB:\n (Pressione ENTER para manter o valor atual)")
                entrada = Input.question("");
                tamanhoMB = entrada.trim() === "" ? tamanhoMB : parseInt(entrada)
                //formato
                console.log(`Formato atual: ${formato}`)
                console.log("Digite o novo formato:\n (Pressione ENTER para manter o valor atual)")
                entrada = Input.question("");
                formato = entrada.trim() === "" ? formato : entrada;

                produtos.atualizar(new LivroDigital(id, titulo, autor, editora, genero, tipo, preco, tamanhoMB, formato))
                break
        }
    } else{
        console.log(colors.fg.red, "\n*** Produto não encontrado ***", colors.reset)
    }
}

//case 5 - deletar por ID
function deletarProduto(): void{
    console.log("Digite o ID do produto que deseja deletar: ")
    const id = Input.questionInt("")
    produtos.deletar(id)
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

//criar produtos para teste
function criarProdutosTeste(): void{
    produtos.cadastrar(new LivroFisico(produtos.gerarId(),"Blade Runner", "Philip K. Dick", "Aleph", "Ficção Científica", 1, 55.50, 253, 10));
    produtos.cadastrar(new LivroFisico(produtos.gerarId(),"Neuromancer", "William Gibson", "Aleph", "Ficção Científica",1, 89, 345, 2 ));
    produtos.cadastrar(new LivroDigital(produtos.gerarId(),"1984", "George Orwell", "Companhia das Letras", "Distopia",2, 49.9, 200, "pdf"));
    produtos.cadastrar(new LivroDigital(produtos.gerarId(),"Cem Anos de Solidão", "Gabriel García Márquez", "Record", "Realismo Mágico", 2, 60, 150, "pdf"));
}

main()