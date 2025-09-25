export interface Genero {
  id: number;
  name: string;
}

export interface EmpresaProducao {
  id: number;
  name: string;
}

export interface PaisProducao {
  iso_3166_1: string;
  name: string;
}

export interface Idioma {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Colecao {
  id: number;
  name: string;
  poster_path?: string;
  backdrop_path?: string;
}

export interface Filme {
  id: number;
  title: string;
  poster_path?: string;
  backdrop_path?: string;
  vote_average: number;
  overview?: string;
  release_date?: string;
  genres?: Genero[];
  runtime?: number;
  tagline?: string;
  budget?: number;
  revenue?: number;
  status?: string;
  original_language?: string;
  original_title?: string;
  production_companies?: EmpresaProducao[];
  production_countries?: PaisProducao[];
  spoken_languages?: Idioma[];
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  adult?: boolean;
  homepage?: string;
  imdb_id?: string;
  belongs_to_collection?: Colecao;
}