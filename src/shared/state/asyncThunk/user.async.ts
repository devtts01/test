import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../../../services/user.service";

export const login = createAsyncThunk(
  "login",
  async ({ userName, password, newpass }: any, thunkApi) => {
    const response = await userService.logIn(userName, password, newpass);
    return response;
  }
);

export const resetPassword = createAsyncThunk(
  "resetPassword",
  async ({ userName, newpass }: any, thunkApi) => {
    const response = await userService.resetPass(userName, newpass);
    return response;
  }
);

export const logout = createAsyncThunk("logout", async () => {
  const response = await userService.logOut();
  return response;
});
