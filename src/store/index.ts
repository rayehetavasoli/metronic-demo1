import { configureStore } from "@reduxjs/toolkit";
import errorSlice from "./error-slice";
import loadingSlice from "./loading-slice";
const store = configureStore({
  reducer: {
    error: errorSlice,
    loading: loadingSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
