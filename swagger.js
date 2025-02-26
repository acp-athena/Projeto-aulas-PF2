import swaggerAutogen from "swagger-autogen";

const doc = {
    host: "localhost:5000",
    info: {
        title: "API REST - PFS2",
        description: "API utilizando os padrões REST na disciplina de programação Fullstack 2"
    }
}

const routes = ['./routes/usuarioRoute.js']
const outputJson = './swaggerOutput.json';

swaggerAutogen({openapi: '3.0.0'})(outputJson, routes, doc)
.then(async () => {
    await import("./server.js")
})