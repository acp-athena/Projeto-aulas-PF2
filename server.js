import express from 'express';
import routerUsuario from './routes/usuarioRoute.js';
import routerFilme from './routes/filmeRoute.js';
import swaggerUi from 'swagger-ui-express'
import {createRequire} from "module";
const require = createRequire(import.meta.url);
const outputJson = require("./swaggerOutput.json");
const app = express();

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson));
app.use("/usuarios", routerUsuario);
app.use("/filmes", routerFilme);


app.listen(5000, () => {
    console.log("backend em execução!");
})