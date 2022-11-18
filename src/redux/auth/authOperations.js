import { createAsyncThunk } from '@reduxjs/toolkit';

import { userApi } from 'services';

export const signupUser = createAsyncThunk(
  'user/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const user = await userApi.registerUser(credentials);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const user = await userApi.loginUser(credentials);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await userApi.logoutUser();
    } catch (error) {
      return rejectWithValue;
    }
  }
);
