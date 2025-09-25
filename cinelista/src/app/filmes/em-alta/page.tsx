import { getFilmesEmAlta } from '@/lib/api/tmdb';
import Grid from '../../components/Grid';
import Title from '../../components/Title';

export default async function FilmesEmAlta() {
  const filmes = await getFilmesEmAlta();
  
  return (
    <>
      <Title title="Filmes em alta" />
      <Grid filmes={filmes}></Grid>
    </>
  );
}

export const metadata = {
  title: 'Filmes em Alta - Cinelista',
  description: 'Descubra os filmes mais populares do momento',
};