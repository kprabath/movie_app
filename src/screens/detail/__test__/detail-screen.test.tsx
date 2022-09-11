/* eslint-disable react/react-in-jsx-scope */
import {waitFor, cleanup, fireEvent} from '@testing-library/react-native';

import {MoviesApi} from '../../../library/api/movies.api';
import {ADD, REMOVE} from '../../../library/constants';
import {makeProps, renderWithRedux} from '../../../library/test-utils';
import {store} from '../../../store';
import {getMovieDetails} from '../../../store/actions/movie.actions';

import DetailScreen from '../detail-screen';

const movie = {
  adult: false,
  backdrop_path: '/hYZ4a0JvPETdfgJJ9ZzyFufq8KQ.jpg',
  belongs_to_collection: null,
  budget: 100000000,
  genres: [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
  ],
  homepage: 'https://www.unitedartistsreleasing.com/samaritan/',
  id: 629176,
  imdb_id: 'tt5500218',
  original_language: 'en',
  original_title: 'Samaritan',
  overview:
    'Thirteen year old Sam Cleary  suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 20 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin.',
  popularity: 4535.782,
  poster_path: '/vwq5iboxYoaSpOmEQrhq9tHicq7.jpg',
  production_companies: [
    {
      id: 21,
      logo_path: '/aOWKh4gkNrfFZ3Ep7n0ckPhoGb5.png',
      name: 'Metro-Goldwyn-Mayer',
      origin_country: 'US',
    },
    {
      id: 166120,
      logo_path: '/fRuHQF9DB4Zl3ha62D5Bpu1a5TL.png',
      name: 'Balboa Productions',
      origin_country: 'US',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America',
    },
  ],
  release_date: '2022-08-25',
  revenue: 0,
  runtime: 102,
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English',
    },
    {
      english_name: 'German',
      iso_639_1: 'de',
      name: 'Deutsch',
    },
  ],
  status: 'Released',
  tagline: "25 years ago the world's greatest hero vanished.",
  title: 'Samaritan',
  video: false,
  vote_average: 7.015,
  vote_count: 860,
};
jest.spyOn(MoviesApi, 'getMovieDetails').mockImplementation(() =>
  Promise.resolve({
    data: movie,
  }),
);

describe('Details Screen', () => {
  test('Should load all the details of a movie', async () => {
    const props = makeProps({selectedMovie: movie});
    const {getByText} = renderWithRedux(<DetailScreen {...props} />);
    store.dispatch(getMovieDetails(629176, jest.fn()));
    await waitFor(() => {
      expect(getByText('Samaritan')).toBeTruthy();
      const button = getByText('ADD');
      expect(button).toBeTruthy();
    });
  });

  test('when click the add button should add to the selected movies', async () => {
    afterAll(cleanup);
    const props = makeProps({selectedMovie: movie});
    const component = renderWithRedux(<DetailScreen {...props} />);
    store.dispatch(getMovieDetails(629176, jest.fn()));
    await waitFor(() => {
      const button = component.getByText('ADD');
      fireEvent.press(button);
      expect(
        store
          .getState()
          .movieReducer.selectedMovies.some(el => el?.id === movie?.id),
      ).toBeTruthy();
    });
  });
});
