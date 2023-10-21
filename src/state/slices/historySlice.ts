import { createSlice } from "@reduxjs/toolkit";

interface State {
  base: string[];
}

const initialState: State = {
  base: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory: (state, action) => {

      state.base = [...new Set([...state.base, action.payload])];
    },
  },
});

export const { addHistory } = historySlice.actions;

export default historySlice.reducer;
