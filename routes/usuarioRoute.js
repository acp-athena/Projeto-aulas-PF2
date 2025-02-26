import express from 'express';
import UsuarioController from '../controllers/usuarioController.js';
import AuthMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();
let ctrl = new UsuarioController();
let authMiddleware = new AuthMiddleware();
router.get("/usuario", authMiddleware.validar, (req, res) => {
    // #swagger.tags = ['Usuários']
    // #swagger.summary = "Endpoint para listar todos os usuários do banco de dados"
    ctrl.listar(req, res);
});
router.post("/usuario", (req, res) => {
    // #swagger.tags = ['Usuários']
    // #swagger.summary = "Cadastra um usuário no banco de dados"
    ctrl.cadastrar(req, res);
});
router.put("/usuario", (req, res) => {
    // #swagger.tags = ['Usuários']
    // #swagger.summary = "Atualiza um usuário através das informações enviadas"

    ctrl.alterar(req, res);
});
router.delete("/usuario/:codigo", (req, res) => {
    // #swagger.tags = ['Usuários']
    // #swagger.summary = "Exclui um usuário especificado através do parâmetro

    ctrl.excluir(req, res);
});
router.get("/usuario/:codigo", (req, res) => {
    // #swagger.tags = ['Usuários']
    // #swagger.summary = "Retorna um usuário especificado através do parâmetro"
    ctrl.obter(req, res);
});


export default router;