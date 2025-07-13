export default class Cliente {
    #id: string;
    #nome: string;
    #idade: number;

    constructor(id: string = '', nome: string, idade: number) {
        this.#id = id;
        this.#nome = nome;
        this.#idade = idade;
    }

    static vazio(): Cliente {
        return new Cliente('', '', 0);
    }

    get id(): string {
        return this.#id;
    }

    get nome(): string {
        return this.#nome;
    }

    get idade(): number {
        return this.#idade;
    }
}
