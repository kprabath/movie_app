import {cloneableGenerator} from '@redux-saga/testing-utils';
import {takeLeading} from 'redux-saga/effects';

import {GET_MOVIES, GET_MOVIE_DETAILS} from '../../../library/constants';
import {getMovieDetails, getMovies, movieSaga} from '../movie.saga';

describe('movieSaga', () => {
  describe('movie saga genarator', () => {
    const generatorMovieSaga = cloneableGenerator(movieSaga)();
    const clone = generatorMovieSaga.clone();

    it('should wait for GET_MOVIES action and call getMovies', () => {
      expect(clone.next().value).toEqual(takeLeading(GET_MOVIES, getMovies));
    });

    it('should wait for GET_MOVIE_DETAILS action and call getMovieDetails', () => {
      expect(clone.next().value).toEqual(
        takeLeading(GET_MOVIE_DETAILS, getMovieDetails),
      );
    });
  });
});
