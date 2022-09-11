import {all, call, put, takeLeading} from 'redux-saga/effects';

import {MoviesApi} from '../../library/api/movies.api';
import {
  GET_MOVIES,
  GET_MOVIES_FAILED,
  GET_MOVIES_SUCCESS,
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_FAILED,
  SET_GENRES,
} from '../../library/constants';
import {Movie, TSaga} from '../../library/types';
import {getRandomGenres} from '../../library/utils';

export function* getMovies() {
  try {
    const {
      data: {genres},
    } = yield call(MoviesApi.getAllGenres);
    const genreArray = getRandomGenres(genres);
    // loading parallely since the TMDB API doesnt support multiple genre querying
    const parallelCalls = genreArray.map(el => {
      return call(MoviesApi.getAllMovies, {genres: el.id.toString()});
    });
    const resData: Array<{data: {results: Array<Movie>}}> = yield all(
      parallelCalls,
    );
    const formattedData = resData.reduce(
      (acc, el, index) => ({
        ...acc,
        [genreArray[index].id]: el.data.results,
      }),
      {},
    );
    yield all([
      put({type: SET_GENRES, payload: genres}),
      put({type: GET_MOVIES_SUCCESS, payload: formattedData}),
    ]);
  } catch (err) {
    yield put({type: GET_MOVIES_FAILED});
  }
}

export function* getMovieDetails({payload, success, failed}: TSaga) {
  try {
    const {data} = yield call(MoviesApi.getMovieDetails, {id: payload});

    success?.(data);
  } catch (err) {
    yield put({type: GET_MOVIE_DETAILS_FAILED, payload: err});
    failed?.();
  }
}

export function* movieSaga() {
  yield takeLeading(GET_MOVIES, getMovies);
  yield takeLeading(GET_MOVIE_DETAILS, getMovieDetails);
}
