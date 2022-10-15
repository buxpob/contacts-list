import { loadContactsList, changeDataLoaded, changeCurrentContact, changeSearchText, setError } from './action';
import { Contact } from './../types/types';
import { createReducer } from '@reduxjs/toolkit';

type InitialState = {
  contactsList: Contact[],
  currentContact: Contact | null,
  searchText: string,
  error: string | null,
  isDataLoaded: boolean,
}

const initialState: InitialState = {
  contactsList: [],
  currentContact: null,
  searchText: '',
  error: null,
  isDataLoaded: true,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadContactsList, (state, action) => {
      state.contactsList = action.payload;
    })
    .addCase(changeDataLoaded, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(changeCurrentContact, (state, action) => {
      state.currentContact = action.payload;
    })
    .addCase(changeSearchText, (state, action) => {
      state.searchText = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
