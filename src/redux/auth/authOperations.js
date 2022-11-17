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
