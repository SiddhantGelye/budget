import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  isLoggedIn: true,
  passoword: "",
  address: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createAccount(state, action) {
      state.username = action.payload.name;
      state.address = action.payload.address;
      state.passoword = action.payload.passoword;
      state.isLoggedIn = true;
    },
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { createAccount, login, logout } = userSlice.actions;

export default userSlice.reducer;
