import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";


export default function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo>
                <h1>Filmes e videos dale</h1>
            </Titulo>
            <Rodape />
        </>
    )
}