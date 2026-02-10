
export abstract class Produto{

    private _id: number;
    private _titulo: string;
    private _autor: string;
    private _editora: string;
    private _genero: string;
    private _tipo: number;
    private _preco: number;



	constructor(id: number, titulo: string, autor: string, editora: string, genero: string, tipo: number, preco: number) {
		this._id = id;
		this._titulo = titulo;
		this._autor = autor;
		this._editora = editora;
		this._genero = genero;
		this._tipo = tipo;
		this._preco = preco;
	}
	

	public get id(): number {
		return this._id;
	}

	public get titulo(): string {
		return this._titulo;
	}

	public get autor(): string {
		return this._autor;
	}

	public get editora(): string {
		return this._editora;
	}

	public get genero(): string {
		return this._genero;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get preco(): number {
		return this._preco;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set titulo(value: string) {
		this._titulo = value;
	}

	public set autor(value: string) {
		this._autor = value;
	}

	public set editora(value: string) {
		this._editora = value;
	}

	public set genero(value: string) {
		this._genero = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}
	public set preco(value: number) {
		this._preco = value;
	}


	//metodo para visulizar
    public visualizar():void{

        // switch case para informar o tipo de livro
    let tipo:string;

    switch(this._tipo){
        case 1:
            tipo = "Livro Fisico"
            break
        case 2:
            tipo = "Livro Digital"
            break
        default:
            tipo = "Tipo Invalido"
    }

     console.log("\n******************************");
     console.log("             LIVRO             ");  
     console.log("******************************");  
     console.log(`ID: ${this._id}`);
     console.log(`TITULO: ${this._titulo}`);
     console.log(`AUTOR: ${this._autor}`);
     console.log(`EDITORA: ${this._editora}`);
     console.log(`GENERO: ${this._genero}`);
     console.log(`TIPO DE LIVRO: ${tipo}`); //exibir a var tipo em vez do atributo 
     console.log(`PREÇO: R$ ${this._preco.toFixed(2)}`);
    }

}