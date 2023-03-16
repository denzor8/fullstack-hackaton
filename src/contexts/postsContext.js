import React, { useContext, useReducer, useState } from 'react'
import { createContext } from 'vm'

export const postsContext = createContext()
export const usePosts = () => useContext(postsContext)

const INIT_STATE = {
    posts: [],
    onePosts: null
}
const API = 'http://35.234.109.231/api/products';

function reducer(state=INIT_STATE, actions) {
    switch(actions.type) {
        case 'GET_PRODUCTS': 
            return {...state, posts: actions.payload}
        case 'GET_ONE_PRODUCT': 
            return {...state, onePosts: actions.payload}
        default: 
            return state
    }
}
const ProductsContextProvider = ({children}) => {
    const [state, dispatch ] = useReducer(reducer, INIT_STATE)
    const [like, setLike] = useState(false)
    const [favorite, setFavorite] = useState(false)

    async function getPosts() {
        try {   
            const tokens = JSON.parse(localStorage.getItem('tokens'));
			const Authorization = `Bearer ${tokens.access}`;
			const config = {
				headers: {
					Authorization
				}
			};
            let {data} = await axios(API, config)

            dispatch({
                type: 'GET_PRODUCTS',
                payload: data
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
            let {data} = await axios(`${API}/${id}`, config)

            dispatch({
                type: 'GET_ONE_PRODUCTS',
                payload: data
            })
        } catch(err) {
            console.log(err)
        }
    }

    async function createPost(newPost, id) {
        try {   
            const tokens = JSON.parse(localStorage.getItem('tokens'));
			const Authorization = `Bearer ${tokens.access}`;
			const config = {
				headers: {
					Authorization
				}
			};
            await axios.post(`${API}/${id}`, newPost, config)
            getProducts()
        } catch(err) {
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

    async function deletePost() {
        const tokens = JSON.parse(localStorage.getItem('tokens'));
			const Authorization = `Bearer ${tokens.access}`;
			const config = {
				headers: {
					Authorization
				}
			};
        try {   
            await axios.delete(`${API}/${id}`, config)
            getProducts()
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

        await axios(`${API}/products/${id}/toggle_like/`, config)
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

    const values = {
        getPosts,
        getOnePosts,
        editPost,
        deletePost,
        createPost,
        toggleFavorites,
        toggleLike
    }

  return (
    <postsContext.Provider value={values} >
        {children}
    </postsContext.Provider>
  )
}

export default ProductsContextProvider