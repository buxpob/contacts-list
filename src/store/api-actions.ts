import { store } from './index';
import { changeDataLoaded, loadContactsList, setError } from './action';
import { BACKEND_URL, TIMEOUT_SHOW_ERROR } from './../const/const';
import { ContactSource } from './../types/types';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';

function responseAdapter(list: ContactSource[]) {
  return list.map((item) => ({
    name: item.name,
    phone: item.phone,
    email: item.email,
    address: item.address,
    department: item.department,
    positionName: item.position_name,
    hireDate: item.hire_date,
  }));
}

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchContactsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'fetchContacts',
  async (_arg, { dispatch, extra: api, getState }) => {
    const { searchText } = getState();
    const { data } = await api.get<ContactSource[]>(`${BACKEND_URL}?term=${searchText}`);
    const contactsList = responseAdapter(data);

    dispatch(changeDataLoaded(true));
    dispatch(loadContactsList(contactsList));
    dispatch(changeDataLoaded(false));
  });
