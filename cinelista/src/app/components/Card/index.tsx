import { Filme } from "@/types/types";
import styles from './Card.module.css';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  filme: Filme;
}

const Card = ({ filme }: Props) => {
  const { id, title, poster_path, overview, vote_average } = filme;
  
  const resumo = overview && overview.length >= 256 
    ? `${overview.substring(0, 253)}...` 
    : overview || '';

  const imageUrl = poster_path 
    ? `${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`
    : '/placeholder-poster.jpg';

  return (
    <div className={styles.card}>
      <Link href={`/filmes/${id}`}>
        <Image 
          className={styles.card__poster}
          src={imageUrl}
          alt={`Poster do Filme ${title}`}
          width={300}
          height={200}
          placeholder="blur"
          blurDataURL="/placeholder-poster.jpg"
        />
        <div className={styles.card__info}>
          <h3 className={styles.card__title}>{title}</h3>
          <p className={styles.card__description}>{resumo}</p>
          <p className={styles.card__rating}>
            Nota: {vote_average.toFixed(1)} ⭐
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;