import { BACKEND_URL } from './../const/const';
import axios, { AxiosInstance } from 'axios';
import { processErrorHandle } from '../process-error-handle';

const REQEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {

      if (error.response) {
        processErrorHandle(error.message);
      }

      throw error;
    }
  );

  return api;
};
