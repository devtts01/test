import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { login, resetPassword } from "../asyncThunk/user.async";

export const userReducer = createSlice({
  name: "user",
  initialState: {
    data: null as any,
  },
  reducers: {
    updateCurrentUser: (state, action) => {
      state.data = action.payload;
    },
    clearCurrentUser: (state) => {
      state.data = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      state.data = action.payload;
      localStorage.setItem("loginData", JSON.stringify(action.payload));
    });
    builder.addCase(login.rejected, (state, action) => {
      toast("Login fail! Wrong username or password", { type: "error" });
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {});
  },
});

// Action creators are generated for each case reducer function
export const { updateCurrentUser, clearCurrentUser } = userReducer.actions;

export default userReducer.reducer;
