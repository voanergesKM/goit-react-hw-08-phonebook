import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { filterSlice } from 'redux/filterSlice';
import { contactsApi } from 'redux/contactsSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
