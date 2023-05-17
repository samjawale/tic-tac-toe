import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Store } from "../types/store";
import { mainSlice } from "./mainSlice";

const rootReducer = combineReducers<Store>({
  main: mainSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});
