import {Filme } from "@/types/types";
import Card from "../Card";

type Props = {
    filmes: Filme[]
}
    const Grid = ({filmes} : Props) => {
  return (
    <section>
        {filmes.map(filme => <Card key={filme.id} filme={filme}/>)}
    </section>
  );
}
export default Grid;