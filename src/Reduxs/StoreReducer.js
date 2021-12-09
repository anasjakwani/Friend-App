import { configureStore } from "@reduxjs/toolkit";
import {postSlice} from "./ReduxSlice"

export const store = configureStore({
    reducer: {
      addPost: postSlice.reducer
    },
  });
  
export const { addPost} = postSlice.actions;