import FilmeEntity from "../entities/filmeEntity.js";

let listaBancoFilme = [
    {
        colunaId: 1,
        colunaNome: "Como Treinar o Seu Dragão",
        colunaGenero: "Animação",
        colunaAno: 2010
    },
    {
        colunaId: 2,
        colunaNome: "Ainda Estou Aqui",
        colunaGenero: "Drama",
        colunaAno: 2024
    }
]

export default class FilmeRepository {

    listaFilme() {
        let lista = [];
        for (let i = 0; i < listaBancoFilme.length; i++) {
            let filme = new FilmeEntity(
                listaBancoFilme[i].colunaId,
                listaBancoFilme[i].colunaNome,
                listaBancoFilme[i].colunaGenero,
                listaBancoFilme[i].colunaAno
            );
            lista.push(filme.toJson());
        }
        return lista;
    }

    obterFilme(codigo){
        return listaBancoFilme.filter(x => x.colunaId == codigo);
    }

    cadastrarFilme(entidade){

        listaBancoFilme.push({
            colunaId: entidade.id,
            colunaNome: entidade.nome,
            colunaGenero: entidade.genero,
            colunaAno: entidade.ano
        })
    }

    editarFilme(entidade){
        //precisa do for para ele percorrer todo o vetor e encontrar um id igual ao informado
        for(let i = 0; i < listaBancoFilme.length; i++){
            // se caso ele encontrar ele entra no if
            if(listaBancoFilme[i].colunaId == entidade.id){
                // aqui ele vai percorrer a posição i inteira e substituir os dados
                listaBancoFilme[i] = {
                    colunaId: entidade.id,
                    colunaNome: entidade.nome,
                    colunaGenero: entidade.genero,
                    colunaAno: entidade.ano
                }
            }
        }
    }

    excluirFilme(codigo){
        listaBancoFilme = listaBancoFilme.filter(x => x.colunaId != codigo)
    }
}