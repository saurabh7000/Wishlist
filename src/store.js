import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { movieInfoReducer, moviesReducer } from "./Redux/Reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  movieInfo: movieInfoReducer,
});

const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
