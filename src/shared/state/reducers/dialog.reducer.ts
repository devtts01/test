import { createSlice } from "@reduxjs/toolkit";

export const dialogReducer = createSlice({
  name: "dialogState",
  initialState: {
    showDialog: false,
    components: new Array<{comp: JSX.Element, title: string}>
  },
  reducers: {
    open: (state, action) => {
      state.showDialog = true;
      state.components.push({comp: action.payload.component, title: action.payload.title})
    },
    close: (state) => {
      state.components.pop()
      if(state.components.length === 0) {
        state.showDialog = false;
      }
    },
  },
});

export const { open, close } = dialogReducer.actions;

export default dialogReducer.reducer;
