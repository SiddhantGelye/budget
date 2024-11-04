import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoadingTrue(state) {
      state.isLoading = true;
    },
    setIsLoadingFalse(state) {
      state.isLoading = false;
    },
  },
});

export const { setIsLoadingFalse, setIsLoadingTrue } = appSlice.actions;

export default appSlice.reducer;
