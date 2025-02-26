import express from 'express';
import routerUsuario from './routes/usuarioRoute.js';
import swaggerUi from 'swagger-ui-express'
import { createRequire } from "module";
import { errorHandler, catchErrors } from './middlewares/exceptionMiddleware.js';
import AuthMiddleware from './middlewares/authMiddleware.js';
const require = createRequire(import.meta.url);
const outputJson = require("./swaggerOutput.json");
const app = express();

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson));
app.use("/", catchErrors(routerUsuario))

//sempre deixar por último
app.use(errorHandler);

app.listen(5000, () => {
    console.log("backend em execução!");
})