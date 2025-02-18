export default class FilmeEntity {

    #id;
    #nome;
    #genero;
    #ano;

    get id(){
        return this.#id;
    }
    set id(value){
        this.#id = value;
    }

    get nome(){
        return this.#nome;
    }
    set nome(value){
        this.#nome = value;
    }

    get genero(){
        return this.#genero;
    }
    set genero(value){
        this.#genero = value;
    }

    get ano(){
        return this.#ano;
    }
    set ano(value){
        this.#ano = value;
    }


    constructor(id, nome, genero, ano){
        this.#id = id;
        this.#nome = nome;
        this.#genero = genero;
        this.#ano = ano;
    }

    toJson(){
        return{
            id: this.#id,
            nome: this.#nome,
            genero: this.#genero,
            ano: this.#ano
        }
    }
}