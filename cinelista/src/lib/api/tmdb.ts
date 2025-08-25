import tmdbApi from "./axios";
// Define Filme type locally if the import is missing
export type Filme = {
    id: number;
    title: string;
    overview: string;
    poster_path?: string;
    release_date?: string;
    [key: string]: any;
};

type Data = {
    results: Filme[]
}

export const getTrendingMovies = async () => {
    const res = await tmdbApi.get<Data>("/trending/movie/week?language=pt-BR");
    return res.data.results;
}

export const getMoviesDetails = async (id: number): Promise<Filme | undefined> => {
    const res = await tmdbApi.get<Filme>(`/movie/${id}?language=pt-BR`);
    return res.data;
}

export const getNowPlaying = async (): Promise<Filme[]> => {
    const res = await tmdbApi.get<Data>("/movie/now_playing?language=pt-BR");
    return res.data.results;
}

export const getPopulares = async (): Promise<Filme[]> => {
    const res = await tmdbApi.get<Data>("/movie/popular?language=pt-BR");
    return res.data.results;
}

export const getTop = async (): Promise<Filme[]> => {
    const res = await tmdbApi.get<Data>("/movie/top_rated?language=pt-BR");
    return res.data.results;
}