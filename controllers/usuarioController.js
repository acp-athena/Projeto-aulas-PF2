import PerfilEntity from "../entities/perfilEntity.js";
import UsuarioEntity from "../entities/usuarioEntity.js";
import UsuarioRepository from "../repositories/usuarioRepository.js";


export default class UsuarioController {

    #repo;

    constructor(){
        this.#repo = new UsuarioRepository();
    }

    async listar(req, res) {
            let usuario = await this.#repo.listar();
            res.status(200).json(usuario);
    }
    
    async cadastrar(req, res) {
            if(req.body) {
                let {nome, email, ativo, senha, perfil} = req.body;
                    if(nome && email && ativo && senha && perfil && perfil.id > 0){
                        let entidade = new UsuarioEntity(0, nome, email, ativo, senha, new PerfilEntity(perfil.id));
                        if(await this.#repo.cadastrar(entidade))
                            return res.status(201).json({msg: "Usuário cadastrado com sucesso!"});
                        else
                            throw new Error("Erro ao inserir usuario no banco de dados!");
                    }
                    else{
                        res.status(400).json({msg: "O corpo da requisição não está adequado!"});
                    }
            }
            else{
                res.status(400).json({msg: "Parâmetros inválidos!"});
            }
    }

    async obter(req, res) {
            let {codigo} = req.params;
            var lista = await this.#repo.obter(codigo);
            if(lista.length == 0){
                return res.status(404).json({msg: "Usuario nao encontrado!"});
            }
            else{
                return res.status(200).json(lista);
            }
    }

    async alterar(req, res) {
            let entidade = new UsuarioEntity();
            let {id, nome, email, ativo, senha, perfil} = req.body;
            if(id > 0 && nome && email && ativo && senha && perfil){
                entidade.email = email;
                entidade.nome = nome;
                entidade.id = id;
                entidade.ativo = ativo;
                entidade.senha = senha;
                entidade.perfil = perfil;
                if(await this.#repo.alterar(entidade))
                    return res.status(200).json({msg: "Usuario alterado com sucesso!"});
                else
                    throw new Error("Erro ao alterar usuario no banco de dados!");
            }
            else{
                return res.status(400).json({msg: "Parametros invalidos!"});
            }
    }

    async excluir(req, res) {
            let {codigo} = req.params;
            if(await this.#repo.excluir(codigo))
                return res.status(200).json({msg: "Usuario excluido com sucesso!"});
            else
                throw new Error("Erro ao excluir usuario no banco de dados!");
    }
}