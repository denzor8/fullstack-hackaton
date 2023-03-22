import axios from 'axios'
import React, { createContext, useContext, useReducer, useState } from 'react'

export const postsContext = createContext()
export const usePosts = () => useContext(postsContext)

const INIT_STATE = {
    posts: [],
    onePosts: null,
    likes: [],
    favorites: [],
    productsDb: []
}
const API = 'http://35.234.109.231/api';
const DbAPI = 'http://localhost:8000/posts'

function reducer(state=INIT_STATE, action) {
    switch(action.type) {
        case 'GET_PRODUCTS': 
            return {...state, posts: action.payload}
        case 'GET_ONE_PRODUCT': 
            return {...state, onePosts: action.payload}
        case 'GET_PRODUCTS_DB': 
            return {...state, productsDb: action.payload}
        default: 
            return state
    }
}
const PostsContextProvider = ({children}) => {
    const [state, dispatch ] = useReducer(reducer, INIT_STATE)
    const [like, setLike] = useState(false)
    const [favorite, setFavorite] = useState(false)

    async function getProducts() {
        const { data } = await axios(`${DbAPI}/${window.location.search}`);
        dispatch({
        type: "GET_PRODUCTS_DB",
        payload: data,
        });
    }
    // modal
    async function getPosts() {
        try {   
            const tokens = JSON.parse(localStorage.getItem('tokens'));
			const Authorization = `Bearer ${tokens.access}`;
			const config = {
				headers: {
					Authorization
				}
			};
            let res = await axios(`${API}/post/`, config)
            console.log(res)
            dispatch({
                type: 'GET_PRODUCTS',
                payload: res.data
            })
        } catch(err) {
            console.log(err)
        }
    }

    async function getOnePosts(id) {
        try {   
            const tokens = JSON.parse(localStorage.getItem('tokens'));
			const Authorization = `Bearer ${tokens.access}`;
			const config = {
				headers: {
					Authorization
				}
			};
            let res = await axios(`${API}/post/${id}/`, config)
            dispatch({
                type: 'GET_ONE_PRODUCT',
                payload: res.data
            })
        } catch(err) {
            console.log(err)
        }
    }
    
    async function createdPost(newPost, navigate) {
        try {   
            const tokens = JSON.parse(localStorage.getItem('tokens'));
			const Authorization = `Bearer ${tokens.access}`;
			const config = {
                headers: {
                    Authorization
				}
			};
            await axios.post(`${API}/post/`, newPost, config)
            getPosts()
            // console.log(state.posts)
            navigate('/')
        } catch(err) {
            const tokens = JSON.parse(localStorage.getItem('tokens'));
			const Authorization = `Bearer ${tokens.access}`;
			const config = {
                headers: {
                    Authorization
				}
			};
            console.log(config)
            console.log(err)
        }
    }

    async function editPost(newPost, id) {
        try {   
            const tokens = JSON.parse(localStorage.getItem('tokens'));
			const Authorization = `Bearer ${tokens.access}`;
			const config = {
				headers: {
					Authorization
				}
			};
            await axios.patch(`${API}/${id}`, newPost, config)
            getPosts()
        } catch(err) {
            console.log(err)
        }
    }

    async function deletePost(id) {
        const tokens = JSON.parse(localStorage.getItem('tokens'));
			const Authorization = `Bearer ${tokens.access}`;
			const config = {
				headers: {
					Authorization
				}
			};
        try {   
            await axios.delete(`${API}/post/${id}/`, config)
            getPosts()
        } catch(err) {
            console.log(err)
        }
    }

    async function toggleLike(id) {
        const tokens = JSON.parse(localStorage.getItem('tokens'));
        const Authorization = `Bearer ${tokens.access}`;
        const config = {
            headers: {
                Authorization
            }
        };
        await axios.post(`${API}/post/${id}/like/`, config)
        getPosts()
        setLike(!true)
    }

    async function toggleFavorites(id) {
        const tokens = JSON.parse(localStorage.getItem('tokens'));
        const Authorization = `Bearer ${tokens.access}`;
        const config = {
            headers: {
                Authorization
            }
        };
        await axios(`${API}/products/${id}/favorites/`, config)
        getPosts()
        setFavorite(!true)
    }

    async function likeProduct(newProduct) {
        await axios.patch(`${DbAPI}/${newProduct.id}`, newProduct);
        getProducts();
    }

    function setLikeStorage() {
        localStorage.setItem("likes", JSON.stringify(INIT_STATE.likes));
        localStorage.setItem("favorites", JSON.stringify(INIT_STATE.favorites));
    }

    const values = {
        getPosts,
        getOnePosts,
        editPost,
        deletePost,
        createdPost,
        toggleFavorites,
        toggleLike,
        posts: state.posts,
        onePosts: state.onePosts,
        deletePost,
        like,
        setLikeStorage,
        likeProduct,
        getProducts,
        productsDb: state.productsDb
    }

  return (
    <postsContext.Provider value={values} >
        {children}
    </postsContext.Provider>
  )
}

export default PostsContextProvider