import { Filme } from "@/types/types";
import Card from "../Card";
import styles from './Grid.module.css';

type Props = {
  filmes: Filme[]; // Adjust the type according to your data structure
}
const Grid = ({filmes} : Props) => {
  
    return (
        <section className={styles.grid}>
            {filmes.map(filme => <Card key={filme.id} filme={filme} />)}
        </section>
  );
}
export default Grid;