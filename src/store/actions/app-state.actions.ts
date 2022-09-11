import {TOGGLE_LOADER} from '../../library/constants';

export const toggleLoader = (payload: any) => ({
  type: TOGGLE_LOADER,
  payload,
});
