import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer, userReducer } from "reducers";

export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoryReducer,
  },
});
