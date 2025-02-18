import UsuarioEntity from "../entities/usuarioEntity.js";
import UsuarioRepository from "../repositories/usuarioRepository.js";


export default class UsuarioController {

    listar(req, res) {
        try{
            let usuario = new UsuarioRepository().listar();
            res.status(200).json(usuario);
        }
        catch(ex){
            //
            res.status(500).json({msg: ex.message})
        }

    }

    
    cadastrar(req, res) {
        try{
            if(req.body) {
                let {nome, email} = req.body;
                    if(nome && email){
                        let entidade = new UsuarioEntity(new Date().getTime(), nome, email);
                        let repo = new UsuarioRepository();
                        repo.cadastrar(entidade);
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
        catch(ex) {
            return res.status(500).json({msg: ex.message});
        }
    }

    obter(req, res) {
        try{
            let {codigo} = req.params;
            let repo = new UsuarioRepository();
            var lista = repo.obter(codigo);
            if(lista.length == 0){
                return res.status(404).json({msg: "Usuario nao encontrado!"});
            }
            else{
                return res.status(200).json(lista);
            }
        }
        catch(ex){
            return res.status(500).json({msg: ex.message});
        }
    }


    alterar(req, res) {
        try{
            let entidade = new UsuarioEntity();
            let {id, nome, email} = req.body;
            if(id && nome && email){
                entidade.email = email;
                entidade.nome = nome;
                entidade.id = id;
                let repo = new UsuarioRepository();
                repo.alterar(entidade);
                return res.status(200).json({msg: "Usuario alterado com sucesso!"});
            }
            else{
                return res.status(400).json({msg: "Parametros invalidos!"});
            }
            
        }
        catch(ex){
            return res.status(500).json({msg: ex.message});
        }
    }

    excluir(req, res) {
        try{
            let {codigo} = req.params;
            let repo = new UsuarioRepository();
            repo.excluir(codigo);
            return res.status(200).json({msg: "Usuario excluido com sucesso!"});

        }
        catch(ex){
            return res.status(500).json({msg: ex.message});
        }
    }
}