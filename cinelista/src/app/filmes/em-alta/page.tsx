import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import { getNowPlaying } from "@/lib/api/tmdb";


const FilmesEmAlta = async() => {
  const filmes = await getNowPlaying();
  return (
    <>
      <Title title="Filmes em alta" />
      <Grid filmes={filmes}></Grid>
    </>
  );
}
export default FilmesEmAlta;