import { configureStore } from "@reduxjs/toolkit";

import wordSlice from "./slices/wordSlice";

const store = configureStore({
  reducer: {
    word: wordSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
