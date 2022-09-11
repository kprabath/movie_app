/* eslint-disable react/react-in-jsx-scope */
import {waitFor} from '@testing-library/react-native';

import {MoviesApi} from '../../../library/api/movies.api';
import {makeProps, renderWithRedux} from '../../../library/test-utils.tsx';
import {store} from '../../../store';
import {getMovies} from '../../../store/actions/movie.actions';

import HomeScreen from '../home-screen';

jest.spyOn(MoviesApi, 'getAllGenres').mockImplementation(() =>
  Promise.resolve({
    data: {
      genres: [
        {
          id: 12,
          name: 'Adventure',
        },
      ],
    },
  }),
);

jest.spyOn(MoviesApi, 'getAllMovies').mockImplementation(() =>
  Promise.resolve({
    data: {
      results: [
        {
          adult: false,
          backdrop_path: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg',
          genre_ids: [28, 12, 14],
          id: 616037,
          original_language: 'en',
          original_title: 'Thor: Love and Thunder',
          overview:
            'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
          popularity: 5099.881,
          poster_path: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
          release_date: '2022-07-06',
          title: 'Thor: Love and Thunder',
          video: false,
          vote_average: 6.8,
          vote_count: 2666,
        },
      ],
    },
  }),
);

describe('Home Screen', () => {
  it('Should load Adventure movies to home screen', async () => {
    const props = makeProps();
    const {getByText} = renderWithRedux(<HomeScreen {...props} />);
    expect(getByText('Movie')).toBeTruthy();
    store.dispatch(getMovies());
    await waitFor(() => {
      expect(getByText('Adventure')).toBeTruthy();
      expect(getByText('Thor: Love and Thunder')).toBeTruthy();
    });
  });
});
