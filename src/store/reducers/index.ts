import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

import appStateReducer from './app-state.reducer';
import movieReducer from './movie.reducer';

const movieReducerPersistConfig = {
  storage: AsyncStorage,
  key: 'movies',
  blacklist: ['movies'],
};

export default combineReducers({
  movieReducer: persistReducer(movieReducerPersistConfig, movieReducer),
  appStateReducer,
});
