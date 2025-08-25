import Title from "@/app/components/Title";
import Grid from "@/app/components/Grid";
import { getPopulares } from "@/lib/api/tmdb";


const FilmesPopulares = async() => {
  const filmes = await getPopulares();
  return (
    <>
      <Title title="Filmes Populares" />
      <Grid filmes={filmes}></Grid>
    </>
  );
}
export default FilmesPopulares;