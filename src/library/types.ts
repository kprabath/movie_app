import {AxiosRequestConfig} from 'axios';
import {StyleProp, ViewStyle} from 'react-native';

import {Genre, Screens} from './enums';

// Navigation types
export type RootStackParamList = {
  [Screens.HOME]: undefined;
  [Screens.DETAIL_PAGE]: {selectedMovie: Movie};
  [Screens.WHIST_LIST]: undefined;
};

// other types
// TMDB Movie
export type Movie = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | string;
  budget: number;
  genres: Array<{id: number; name: Genre}>;
  homePage: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  production_companies: Array<{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{iso_3166_1: string; name: string}>;
  release_date: string;
  revenue: number;
  runtime: string;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TSaga = {
  type: string;
  payload?: any;
  success?: Function;
  failed?: Function;
};

export type IRequest = {
  url?: string;
  data?: object;
  params?: object;
  action: string;
  method?: AxiosRequestConfig['method'];
  headers?: AxiosRequestConfig['headers'];
};

// declare reducer types here

export type Reducers = {
  movieReducer: MovieReducer;
  appStateReducer: AppStateReducer;
};

export type AppStateReducer = {
  loadingStatus: {
    loading: boolean;
    loadErrors: {
      [key: string]: number;
    };
  };
};
export type MovieReducer = {
  movies: {
    [key: string]: Array<Movie>;
  };
  selectedMovies: Array<Movie>;
  genres: Array<{id: number; name: Genre}>;
};

// Theme types

export type ThemeObject = {
  // UI information to determine theme styles
  ui?: {
    primaryButton?: StyleProp<ViewStyle>;
    secondaryButton?: StyleProp<ViewStyle>;
  };
  // define colors
  colorPallete: {
    [key: string]: string;
  };
  typoGraphy: {
    displayText: string;
    // title | subtitle texts
    titleLarge?: string;
    titleMedium?: string;
    titleSmall?: string;
    // paragraph texts
    paragraphLarge?: string;
    paragraphMedium?: string;
    paragraphSmall?: string;
  };
};
