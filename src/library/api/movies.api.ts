import {DISCOVER, GENRE_LIST, MOVIE_DETAILS} from '../constants';

import BaseApi from './base-api';

export class MoviesApi {
  // fetch movies
  static getAllMovies = ({genres}: {genres: string}) =>
    BaseApi({
      action: DISCOVER,
      params: {
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: false,
        include_video: false,
        page: 1, // can make as a param to create infinite scrolling
        with_genres: genres,
      },
    });

  // fetch available Genres
  static getAllGenres = () =>
    BaseApi({
      action: GENRE_LIST,
      params: {
        language: 'en-US',
      },
    });

  // get details for a given movie
  static getMovieDetails = ({id}: {id: number}) =>
    BaseApi({
      action: MOVIE_DETAILS(id),
      params: {
        language: 'en-US',
      },
    });
}
