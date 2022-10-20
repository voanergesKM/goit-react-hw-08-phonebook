import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange(state, action) {
      console.log(state);
      console.log(action);
    },
  },
});

// export default filterSlice.reducer;
