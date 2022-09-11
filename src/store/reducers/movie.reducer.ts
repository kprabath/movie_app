import {
  ADD_TO_SELECTED_MOVIES,
  GET_MOVIES_SUCCESS,
  REMOVE_FROM_SELECTED_MOVIE,
  SET_GENRES,
} from '../../library/constants';
import {MovieReducer} from '../../library/types';

const INITIAL_STATE: MovieReducer = {
  movies: {},
  selectedMovies: [],
  genres: [],
};

const movieReducer = (
  state = INITIAL_STATE,
  {type, payload}: {type: string; payload: any},
) => {
  switch (type) {
    case GET_MOVIES_SUCCESS:
      return {...state, movies: payload};
    case ADD_TO_SELECTED_MOVIES:
      return {...state, selectedMovies: [...state.selectedMovies, payload]};
    case REMOVE_FROM_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovies: state.selectedMovies.filter(el => el.id !== payload.id),
      };
    case SET_GENRES:
      return {...state, genres: payload};
    default:
      return state;
  }
};

export default movieReducer;
