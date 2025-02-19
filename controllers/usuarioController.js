import UsuarioEntity from "../entities/usuarioEntity.js";
import UsuarioRepository from "../repositories/usuarioRepository.js";


export default class UsuarioController {

    #repo;

    constructor(){
        this.#repo = new UsuarioRepository();
    }

    listar(req, res) {
            let usuario = this.#repo.listar();
            res.status(200).json(usuario);
    }
    
    cadastrar(req, res) {
            if(req.body) {
                let {nome, email} = req.body;
                    if(nome && email){
                        let entidade = new UsuarioEntity(new Date().getTime(), nome, email);
                        this.#repo.cadastrar(entidade);
                        return res.status(201).json({msg: "Usuário cadastrado com sucesso!"});
                    }
                    else{
                        res.status(400).json({msg: "O corpo da requisição não está adequado!"});
                    }
            }
            else{
                res.status(400).json({msg: "Parâmetros inválidos!"});
            }
    }

    obter(req, res) {
            let {codigo} = req.params;
            let repo = this.#repo;
            var lista = repo.obter(codigo);
            if(lista.length == 0){
                return res.status(404).json({msg: "Usuario nao encontrado!"});
            }
            else{
                return res.status(200).json(lista);
            }
    }

    alterar(req, res) {
            let entidade = new UsuarioEntity();
            let {id, nome, email} = req.body;
            if(id && nome && email){
                entidade.email = email;
                entidade.nome = nome;
                entidade.id = id;
                this.#repo.alterar(entidade);
                return res.status(200).json({msg: "Usuario alterado com sucesso!"});
            }
            else{
                return res.status(400).json({msg: "Parametros invalidos!"});
            }
    }

    excluir(req, res) {
            let {codigo} = req.params;
            this.#repo.excluir(codigo);
            return res.status(200).json({msg: "Usuario excluido com sucesso!"});
    }
}