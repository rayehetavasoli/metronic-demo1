import { createSlice } from '@reduxjs/toolkit';
const errorSlice = createSlice({
  name: 'error',
  initialState: {
    hasError: false,
    error: {
      message: '',
      statusCode: 0,
    },
  },
  reducers: {
    setHasError(state, action) {
      state.hasError = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});
export const errorActions = errorSlice.actions;
export default errorSlice.reducer;
