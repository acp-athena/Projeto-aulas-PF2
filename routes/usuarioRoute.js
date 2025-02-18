import express from 'express';
import UsuarioController from '../controllers/usuarioController.js';

const router = express.Router();
let ctrl = new UsuarioController();

router.get("/", (req, res) => {
    // #swagger.tags = ['Usuarios']
    // #swagger.summary = "Endpoint para listar todos os usuarios do banco de dados"
    ctrl.listar(req, res)
});

router.post("/", (req, res) => { 
    // #swagger.tags = ['Usuarios']
    // #swagger.summary = "Endpoint para cadastrar um usuario no banco de dados"
    ctrl.cadastrar(req, res)
});

router.delete("/:codigo", (req, res) => {
    // #swagger.tags = ['Usuarios']
    // #swagger.summary = "Endpoint para deletar um usuario do banco de dados"
    ctrl.excluir(req, res)
});

router.get("/:codigo", (req, res) => { 
    // #swagger.tags = ['Usuarios']
    // #swagger.summary = "Endpoint para obter um usuario do banco de dados"
    ctrl.obter(req, res)
});

router.put("/:codigo", (req, res) => {
    // #swagger.tags = ['Usuarios']
    // #swagger.summary = "Endpoint para alterar um usuario do banco de dados"
    ctrl.alterar(req, res)
});

export default router;