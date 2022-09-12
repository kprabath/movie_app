import {DISCOVER, TOGGLE_LOADER} from '../../../library/constants';
import reducer from '../app-state.reducer';

describe('app state reducer', () => {
  test('should return the intial state', () => {
    expect(reducer(undefined, {})).toEqual({
      loadingStatus: {loading: false, loadErrors: {}},
    });
  });

  test('should handle TOGGLE_LOADER', () => {
    const actionA = {
      payload: {status: 'success', action: DISCOVER},
      type: TOGGLE_LOADER,
    };
    const actionB = {
      payload: {status: 'failed', action: DISCOVER},
      type: TOGGLE_LOADER,
    };
    expect(reducer(getMockState(), actionA)).toEqual({
      loadingStatus: {loading: false, loadErrors: {'/discover/movie': 0}},
    });
    expect(reducer(getMockState(), actionB)).toEqual({
      loadingStatus: {loading: false, loadErrors: {'/discover/movie': 1}},
    });
  });
});

const getMockState = () => ({
  loadingStatus: {
    loadErrors: {},
    loading: false,
  },
});
