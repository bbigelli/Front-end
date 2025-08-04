import Link from 'next/link';
import { Destino } from '../data/destinos';
import styles from '../styles/CardDestino.module.css';

interface CardDestinoProps {
  destino: Destino;
}

export default function CardDestino({ destino }: CardDestinoProps) {
  return (
    <div className={styles.card}>
      <img 
        src={destino.imagem} 
        alt={destino.nome} 
        className={styles.imagem}
        width={300}
        height={200}
      />
      <div className={styles.conteudo}>
        <h3>{destino.nome}</h3>
        <p className={styles.descricao}>{destino.descricao.substring(0, 100)}...</p>
        <Link href={`/destinos/${destino.id}`} className={styles.botao}>
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}