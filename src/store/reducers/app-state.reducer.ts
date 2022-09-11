import {TOGGLE_LOADER} from '../../library/constants';
import {AppStateReducer} from '../../library/types';

const INITIAL_STATE: AppStateReducer = {
  loadingStatus: {
    loadErrors: {},
    loading: false,
  },
};

const setLoadingStatus = (state: AppStateReducer, payload: any) => {
  // this will track the load status and the incomming load errors efficiently
  if (payload.status === 'start') {
    return {
      ...state,
      loadingStatus: {loading: true, ...state.loadingStatus.loadErrors},
    };
  }
  let action = payload.action;
  const incrementer =
    payload.status === 'success'
      ? 0
      : (state.loadingStatus.loadErrors?.[action] ?? 0) + 1;
  const index = payload.action.indexOf('?');
  action = index > 0 ? payload.action.substring(0, index) : payload.action;
  return {
    ...state,
    loadingStatus: {
      loading: false,
      loadErrors: {
        ...state.loadingStatus.loadErrors,
        [action]: incrementer,
      },
    },
  };
};

const appStateReducer = (
  state = INITIAL_STATE,
  {type, payload}: {type: string; payload: any},
) => {
  switch (type) {
    case TOGGLE_LOADER:
      return setLoadingStatus(state, payload);
    default:
      return state;
  }
};

export default appStateReducer;
