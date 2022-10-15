import { Contact } from './../types/types';
import { createAction } from '@reduxjs/toolkit';

export const loadContactsList = createAction<Contact[]>('loadContactsList');

export const changeCurrentContact = createAction<Contact | null>('changeCurrentContact');

export const setError = createAction<string | null>('setError');

export const changeSearchText = createAction<string>('changeSearchText');

export const changeDataLoaded = createAction<boolean>('changeDataLoaded');
