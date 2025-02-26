

export default class AuthMiddleware {


    validar(req, res, next) {
        let chave = req.headers.chave
        if(chave == "teste123") {
            next();
        }
        else{
            return res.status(401).json({msg: "Não autorizado"});
        }
    }
}