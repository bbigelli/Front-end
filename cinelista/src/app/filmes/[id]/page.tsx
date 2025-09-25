import { getFilmePorId } from '@/lib/api/tmdb';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';

interface Props {
  params: {
    id: string;
  };
}

export default async function FilmeDetalhes({ params }: Props) {
  const filme = await getFilmePorId(Number(params.id));

  if (!filme) {
    notFound();
  }

  return (
    <div className={styles.container}>
      {filme.backdrop_path && (
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${filme.backdrop_path}`}
          alt={`Backdrop de ${filme.title}`}
          width={1920}
          height={1080}
          className={styles.backdrop}
          priority
        />
      )}
      
      <div className={styles.content}>
        <div className={styles.posterSection}>
          {filme.poster_path && (
            <Image
              src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${filme.poster_path}`}
              alt={`Poster de ${filme.title}`}
              width={300}
              height={450}
              className={styles.poster}
            />
          )}
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.title}>{filme.title}</h1>
          
          {filme.tagline && (
            <p className={styles.tagline}>{filme.tagline}</p>
          )}

          <div className={styles.metadata}>
            {filme.release_date && (
              <span>{new Date(filme.release_date).getFullYear()}</span>
            )}
            
            {filme.runtime && (
              <span>{Math.floor(filme.runtime / 60)}h {filme.runtime % 60}min</span>
            )}
            
            <span>⭐ {filme.vote_average.toFixed(1)}</span>
          </div>

          {filme.overview && (
            <div className={styles.overview}>
              <h2>Sinopse</h2>
              <p>{filme.overview}</p>
            </div>
          )}

          {filme.genres && filme.genres.length > 0 && (
            <div className={styles.genres}>
              <h3>Gêneros</h3>
              <div className={styles.genreList}>
                {filme.genres.map(genre => (
                  <span key={genre.id} className={styles.genreTag}>
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: Props) {
  const filme = await getFilmePorId(Number(params.id));

  if (!filme) {
    return {
      title: 'Filme não encontrado',
    };
  }

  return {
    title: `${filme.title} - Cinelista`,
    description: filme.overview || `Detalhes do filme ${filme.title}`,
  };
}