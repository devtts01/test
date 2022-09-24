import { createSlice } from "@reduxjs/toolkit";

const LoadingReducer = createSlice({
  name: "loadingState",
  initialState: {
    value: 0,
  },
  reducers: {
    show: (state) => {
      state.value += 1;
    },
    hide: (state) => {
      state.value -= 1;
      if (state.value <= 0) state.value = 0;
    },
  },
});

export const { show, hide } = LoadingReducer.actions;
export default LoadingReducer.reducer;
