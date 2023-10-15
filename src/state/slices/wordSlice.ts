import { createSlice } from "@reduxjs/toolkit";

interface State {
  base: string | null;
}

const initialState: State = {
  base: null,
};

export const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {},
});

export const {} = wordSlice.actions;

export default wordSlice.reducer;
