import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loading: uiReducer,
  },
});
