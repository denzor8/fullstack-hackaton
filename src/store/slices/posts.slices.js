import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        onePosts: null
    },
    reducers: {
        getPosts(state, action) {
            state.posts = action.payload
        }, 
        getOnePost(state, action) {
            state.onePosts = action.payload
        }, 
    }

})

export const {getOnePost, getPosts} = postsSlice.actions