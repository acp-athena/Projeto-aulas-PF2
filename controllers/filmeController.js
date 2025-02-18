import FilmeRepository from "../repositories/filmeRepository.js";
import FilmeEntity from "../entities/filmeEntity.js";


export default class FilmeController {

    listarFilme(req, res) {
        try{
            let filme = new FilmeRepository().listaFilme();
            res.status(200).json(filme);
        }
        catch(ex){
            res.status(500).json({msg: ex.message});
        }
    }

    obterFilme(req, res){
        try{
            let {codigo} = req.params;
            let repo = new FilmeRepository();
            var lista = repo.obterFilme(codigo);
                if(lista.length == 0){
                    return res.status(404).json({msg: "Filme nao encontrado!"});
                }
                else{
                    return res.status(200).json(lista);
                }
        }
        catch(ex){
            res.status(500).json({msg: ex.message});
        }
    }

    cadastrarFilme(req, res){
        try{
            if(req.body){
                let {nome, genero, ano} = req.body;
                if(nome && genero && ano){
                    let entidade = new FilmeEntity(new Date().getTime(), nome, genero, ano);
                    let repositorio = new FilmeRepository();
                    repositorio.cadastrarFilme(entidade);
                    return res.status(200).json({msg: "Filme cadastrado com sucesso!"});
                }
                else{
                    res.status(400).json({msg: "O corpo da requisição não está adequado!"});
                }
            }
        }
        catch(ex){
            res.status(500).json({msg: ex.message});
        }
    }

    editarFilme(req, res){
        try{
            let entidade = new FilmeEntity();
            let {id, nome, genero, ano} = req.body;
            if(id && nome && genero && ano){
                entidade.id = id;
                entidade.nome = nome;
                entidade.genero = genero;
                entidade.ano = ano;

                let repositorio = new FilmeRepository();
                repositorio.editarFilme(entidade);

                return res.status(200).json({msg: "Filme editado com sucesso!"});
            }
            else{
                return res.status(400).json({msg: "Parametros invalidos!"})
            }
        }
        catch(ex){
            res.status(500).json({msg: ex.message});
        }
    }

    excluir(req, res){
        try{
            let {codigo} = req.params;
            let filme = new FilmeRepository();
            filme.excluirFilme(codigo);
            return res.status(200).json({msg: "Filme apagado com sucesso!"})
        }
        catch(ex){
            res.status(500).json({msg: ex.message});
        }
    }
}