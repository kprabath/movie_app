import {GET_MOVIES, GET_MOVIE_DETAILS} from '../../library/constants';
import {Movie} from '../../library/types';

export const getMovies = () => ({type: GET_MOVIES});
export const addOrDeleteMovie = (type: string, movie: Movie) => ({
  type,
  payload: movie,
});
export const getMovieDetails = (id: number, success: Function) => ({
  type: GET_MOVIE_DETAILS,
  payload: id,
  success,
});
