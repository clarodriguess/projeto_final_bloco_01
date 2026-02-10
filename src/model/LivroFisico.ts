import { Produto } from "./Produto";


export class LivroFisico extends Produto{

    private _paginas: number;
    private _estoque: number;

    constructor(id: number, titulo: string, autor: string, editora: string, genero: string,tipo: number, preco: number, paginas: number, estoque: number) {
        super(id, titulo, autor, editora, genero, tipo, preco);
        this._paginas = paginas;
        this._estoque = estoque;
    }

	public get paginas(): number {
		return this._paginas;
	}

	public get estoque(): number {
		return this._estoque;
	}

	public set paginas(value: number) {
		this._paginas = value;
	}

	public set estoque(value: number) {
		this._estoque = value;
	}    

    //met visualizar sobreescrito
    public visualizar(): void {
        super.visualizar();
        console.log(`PAGINAS: ${this._paginas}`);
        console.log(`ESTOQUE: ${this._estoque}`);
    }

}