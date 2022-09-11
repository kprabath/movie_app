import {createSelector} from 'reselect';

import {Reducers} from '../../library/types';

const selectedMovies = (state: Reducers) => state.movieReducer.movies;
const selectedGenres = (state: Reducers) => state.movieReducer.genres;

export const getMoviesForGenresSelector = createSelector(
  selectedMovies,
  selectedGenres,
  (movies, genres) => {
    // group movies by generes
    const formattedData = Object.keys(movies).map(el => {
      const genre = genres.find(e => e.id.toString() === el);
      return {
        title: genre?.name,
        data: movies[el],
        _id: el,
      };
    });
    return formattedData;
  },
);
