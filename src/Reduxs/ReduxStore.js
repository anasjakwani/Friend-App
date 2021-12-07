import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addPost(state) {
      state.value++
    },
    deletePost(state) {
      state.value--
    },
  },
});

configureStore({
    reducer: counterSlice.reducer
})

export const { addPost, deletePost } = counterSlice.actions
export default counterSlice.reducer