import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./slices/posts.slices";

export const store = configureStore({
    reducer: {
        posts: postsSlice.reducer
    }
})