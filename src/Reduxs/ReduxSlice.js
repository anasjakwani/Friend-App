import { createSlice } from "@reduxjs/toolkit";



export const postSlice = createSlice({
  name: "post",
  initialState: {
    value: {
      posttext: null,
      postImage: null,
    },
  },
  reducers: {
    addPost: (state, action) => {
      state.value = action.payload;
    },
  },
});


export default postSlice.reducer;
