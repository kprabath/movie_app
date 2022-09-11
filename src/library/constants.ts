export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAILED = 'GET_MOVIES_FAILED';
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';
export const GET_MOVIE_DETAILS_SUCCESS = 'GET_MOVIE_DETAILS_SUCCESS';
export const GET_MOVIE_DETAILS_FAILED = 'GET_MOVIE_DETAILS_FAILED';

export const SET_GENRES = 'SET_GENRES';
export const ADD_TO_SELECTED_MOVIES = 'ADD_TO_SELECTED_MOVIES';
export const REMOVE_FROM_SELECTED_MOVIE = 'REMOVE_FROM_SELECTED_MOVIE';

export const STATR_LOADER = 'START_LOADER';
export const STOP_LOADER = 'STOP_LOADER';

export const TOGGLE_LOADER = 'TOGGLE_LOADER';

// Details screen texts
export const DETAIL_SCREEN_HEADER = 'Movie Details';
export const HOME_SCREEN_HEADER_TEXT = '<a>Movie</a> Theatre';

// API ACTIONS

export const DISCOVER = '/discover/movie';
export const MOVIE_DETAILS = (id: number) => `/movie/${id}`;
export const GENRE_LIST = '/genre/movie/list';

// movie details texts
export const IMDB = 'IMDb';
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const RELEASE_DATE = 'Relase date';
