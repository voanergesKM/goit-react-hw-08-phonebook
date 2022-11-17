import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { contactsSlice } from 'redux/contacts/contactsSlice';
import { filterSlice } from 'redux/filter/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
