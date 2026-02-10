import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";


export class ProdutoController implements ProdutoRepository{

    private listaProdutos = new Array<Produto>();
    public id: number = 0;

    //metodos crud
    listarTodos(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        } //percorre todo o array e lista o q tem, item a item
    }

    listarPorId(id: number): void {
        const buscaProduto = this.buscarNoArray(id);
        
        if (buscaProduto !== null) {
            buscaProduto.visualizar();
        } else{
            console.log(colors.fg.red, "\n*** Produto não encontrado ***", colors.reset)
        }
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(colors.fg.green, "\n*** Produto cadastrado com sucesso ***", colors.reset)
    } 

    atualizar(produto: Produto): void {
        const buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto !== null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto; //[] pega na lista produtos, o indice do obj - substitui pelo novo 
            console.log(colors.fg.green, `\n*** Produto ${produto.id} atualizada com sucesso ***`, colors.reset);
        } else{
            console.log(colors.fg.red, "\n*** Produto não encontrada ***", colors.reset)
        }
    
    }

    deletar(id: number): void {
        const buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(colors.fg.green, `\n*** Produto ${id} apagado com sucesso ***`, colors.reset);
        } else{
            console.log(colors.fg.red, "\n*** Produto não encontrado ***", colors.reset)
        }
    }
    


    //gerar id automatico
    //deixar o metodo publico para acessar no menu
    public gerarId():number{
        return ++ this.id;
    }

    //procurar produto por id (para usar em buscar por id, deletar)
    public buscarNoArray(id:number):Produto | null{
        for (let produto of this.listaProdutos) {
            if(produto.id === id){
                return produto;
            }
        }
        return null;
    }
}
 


