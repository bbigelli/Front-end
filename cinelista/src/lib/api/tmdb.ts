export interface FilmeTMDbResponse {
  id: number;
  title: string;
  poster_path?: string;
  backdrop_path?: string;
  vote_average: number;
  overview?: string;
  release_date?: string;
  genres?: Array<{ id: number; name: string }>;
  runtime?: number;
  tagline?: string;
  budget?: number;
  revenue?: number;
  status?: string;
  original_language?: string;
  original_title?: string;
  production_companies?: Array<{ id: number; name: string }>;
  production_countries?: Array<{ iso_3166_1: string; name: string }>;
  spoken_languages?: Array<{ english_name: string; iso_639_1: string; name: string }>;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  adult?: boolean;
  homepage?: string;
  imdb_id?: string;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path?: string;
    backdrop_path?: string;
  };
}

export interface FilmesResponse {
  results: FilmeTMDbResponse[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface Filme {
  id: number;
  title: string;
  poster_path?: string;
  backdrop_path?: string;
  vote_average: number;
  overview?: string;
  release_date?: string;
  genres?: Array<{ id: number; name: string }>;
  runtime?: number;
  tagline?: string;
  budget?: number;
  revenue?: number;
  status?: string;
  original_language?: string;
  original_title?: string;
  production_companies?: Array<{ id: number; name: string }>;
  production_countries?: Array<{ iso_3166_1: string; name: string }>;
  spoken_languages?: Array<{ english_name: string; iso_639_1: string; name: string }>;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  adult?: boolean;
  homepage?: string;
  imdb_id?: string;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path?: string;
    backdrop_path?: string;
  };
}

export async function getFilmesEmAlta(): Promise<Filme[]> {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
    }
  };

  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=pt-BR',
      options
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: FilmesResponse = await response.json();
    
    return data.results.map((filme: FilmeTMDbResponse) => ({
      id: filme.id,
      title: filme.title,
      poster_path: filme.poster_path,
      backdrop_path: filme.backdrop_path,
      vote_average: filme.vote_average,
      overview: filme.overview,
      release_date: filme.release_date,
      genres: filme.genres,
      runtime: filme.runtime,
      tagline: filme.tagline,
    }));
  } catch (err) {
    console.error('Erro ao buscar filmes em alta:', err);
    return [];
  }
}

export async function getFilmePorId(id: number): Promise<Filme | null> {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
    }
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
      options
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const filme: FilmeTMDbResponse = await response.json();
    
    return {
      id: filme.id,
      title: filme.title,
      poster_path: filme.poster_path,
      backdrop_path: filme.backdrop_path,
      vote_average: filme.vote_average,
      overview: filme.overview,
      release_date: filme.release_date,
      genres: filme.genres,
      runtime: filme.runtime,
      tagline: filme.tagline,
      budget: filme.budget,
      revenue: filme.revenue,
      status: filme.status,
      original_language: filme.original_language,
      original_title: filme.original_title,
      production_companies: filme.production_companies,
      production_countries: filme.production_countries,
      spoken_languages: filme.spoken_languages,
      popularity: filme.popularity,
      vote_count: filme.vote_count,
      video: filme.video,
      adult: filme.adult,
      homepage: filme.homepage,
      imdb_id: filme.imdb_id,
      belongs_to_collection: filme.belongs_to_collection,
    };
  } catch (err) {
    console.error('Erro ao buscar filme:', err);
    return null;
  }
}

export async function pesquisarFilmes(query: string): Promise<Filme[]> {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
    }
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=pt-BR`,
      options
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: FilmesResponse = await response.json();
    
    return data.results.map((filme: FilmeTMDbResponse) => ({
      id: filme.id,
      title: filme.title,
      poster_path: filme.poster_path,
      backdrop_path: filme.backdrop_path,
      vote_average: filme.vote_average,
      overview: filme.overview,
      release_date: filme.release_date,
    }));
  } catch (err) {
    console.error('Erro ao pesquisar filmes:', err);
    return [];
  }
}