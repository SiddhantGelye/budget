import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import budgetReducer from "./budgetSlice";
import appReducer from "./appSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    budget: budgetReducer,
  },
});

export default store;
