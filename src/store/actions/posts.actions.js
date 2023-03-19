import axios from "axios"
import { getOnePost, getPosts } from "../slices/posts.slices"


const API = 'http://35.234.109.231/api/products'

export const getPostsList = () => async (dispatch) => {
    try {   
        const tokens = JSON.parse(localStorage.getItem('tokens'));
        const Authorization = `Bearer ${tokens.access}`;
        const config = {
            headers: {
                Authorization
            }
        };
        let {data} = await axios(API, config)

        dispatch(getPosts(data))
    } catch(err) {
        console.log(err)
    }
}

export const getOnePostList = (id) => async (dispatch) => {
    const {data} = await axios(`${API}/${id}`)
    dispatch(getOnePost(data))
}

export const deletePost= (id) => async (dispatch) => {
    await axios.delete(`${API}/${id}`)
}

export const editPost  = (id, newUser) => async (dispatch) => {
    await axios(API, newUser) 
}