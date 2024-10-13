import { createSlice } from "@reduxjs/toolkit";
const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    hasLoading: false,
  },
  reducers: {
    setHasLoading(state, action) {
      state.hasLoading = action.payload;
    },
  },
});
export const loadingActions = loadingSlice.actions;
export default loadingSlice.reducer;
