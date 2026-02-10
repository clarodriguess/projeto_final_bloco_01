import { Produto } from "./Produto";

export class LivroDigital extends Produto{

    private _tamanhoMB: number;
    private _formato: string;

    constructor(id: number, titulo: string, autor: string, editora: string, genero: string, tipo: number, preco: number, tamanhoMB: number, formato: string) {
        super(id, titulo, autor, editora, genero, tipo, preco);
        this._tamanhoMB = tamanhoMB;
        this._formato = formato;
    }


	public get tamanhoMB(): number {
		return this._tamanhoMB;
	}


	public get formato(): string {
		return this._formato;
	}

	public set tamanhoMB(value: number) {
		this._tamanhoMB = value;
	}

	public set formato(value: string) {
		this._formato = value;
	}

    //metodo visualizar sobreescrito
    public visualizar(): void {
        super.visualizar();
        console.log(`TAMANHO: ${this._tamanhoMB} MB`);
        console.log(`FORMATO: ${this._formato}`);
    }

}
    
