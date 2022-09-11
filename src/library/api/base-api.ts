import axios, {AxiosError, AxiosRequestConfig} from 'axios';

import {store} from '../../store';
import {toggleLoader} from '../../store/actions/app-state.actions';

import {API_KEY, BASE_URL} from '../config';
import {IRequest} from '../types';

enum ApiStatusCodes {}

const BaseApi = ({
  url,
  data,
  action,
  params,
  method = 'GET', // method defaults to get
  headers,
}: IRequest) => {
  return new Promise((resolve, reject) => {
    const getUrl = () => BASE_URL + action;

    (params as any).api_key = API_KEY;

    // starting the loader
    store.dispatch(toggleLoader({complete: false, status: 'start'}));

    const axiosConfig: AxiosRequestConfig = {
      data,
      params,
      headers,
      timeout: 1000,
      method: method || 'post',
      url: url || getUrl(),
    };
    axios(axiosConfig)
      .then(response => {
        resolve(response);
        console.log(action, response, params);
        //stoppping the loader
        store.dispatch(toggleLoader({status: 'success', action}));
      })
      .catch((err: AxiosError) => {
        const {response} = err;
        console.log(action, err, params);
        store.dispatch(toggleLoader({status: 'failed', action}));
        // stopping the loader
        reject(response);
      });
  });
};

export default BaseApi;
