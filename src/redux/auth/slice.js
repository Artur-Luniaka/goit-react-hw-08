import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
    token: null,
  },
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default slice.reducer;
