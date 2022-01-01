import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";
import { composeWithDevTools } from "redux-devtools-extension";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  devTools: {
    composeWithDevTools,
  },
});
