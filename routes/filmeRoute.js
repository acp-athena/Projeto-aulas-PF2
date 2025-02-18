import FilmeController from "../controllers/filmeController.js";
import express from 'express';

const router = express.Router();
let ctrl = new FilmeController();

router.get("/", (req, res) => {
    
    //#swagger.tags = ['Filmes']
    //#swagger.summary = 'Listagem de filmes cadastrados no banco de dados'
    
    ctrl.listarFilme(req, res);
});

router.post("/", (req, res) => {

    //#swagger.tags = ['Filmes']
    //#swagger.summary = "Cadastrar filmes no banco de dados"

    ctrl.cadastrarFilme(req, res);
});

router.get("/:codigo", (req, res) => {

    //#swagger.tags = ['Filmes']
    //#swagger.summary = "Buscar filme pelo ID"

    ctrl.obterFilme(req, res);
});

router.put("/:codigo", (req, res) => {

    //#swagger.tags = ['Filmes']
    //#swagger.summary = "Alterar filme salvo no banco de dados"

    ctrl.editarFilme(req, res);
});

router.delete("/:codigo", (req, res) => {

    //#swagger.tags = ['Filmes']
    //#swagger.summary = "Exclusão de filme salvo no banco de dados"
    
    ctrl.excluir(req, res);
});

export default router;