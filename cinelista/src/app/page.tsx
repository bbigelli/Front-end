import Title from "./components/Title";
import Grid from "./components/Grid";
import { getTrendingMovies } from "@/lib/api/tmdb";

export default async function Home() {
  const filmes = await getTrendingMovies();
  return (
    <>
    <Title title="Filmes em destaque" />
    <Grid filmes={filmes} />
    
    </>
  );
}


