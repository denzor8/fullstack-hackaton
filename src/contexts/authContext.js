import React, { useState } from 'react';
import axios from 'axios';

export const authContext = React.createContext();

const API = 'http://35.234.109.231/api';

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleRegister(obj) {
        setLoading(true);
        try {
            const res = await axios.post(`${API}/account/register/`, obj);
            console.log(res);
        } catch(err) {
            console.log(err);
            setError(Object.values(err.response.data).flat(2));
        } finally {
            setLoading(false);
        };
    };

    async function handleLogin(obj, email, navigate) {
        try {
            const res = await axios.post(`${API}/account/login/`, obj);
            localStorage.setItem("tokens", JSON.stringify(res.data));
            localStorage.setItem("email", email);
            setCurrentUser(email);
            console.log(res);
            navigate('/');
        } catch(err) {
            console.log(err);
            setError([err.response.data.detail]);
        }
    }

  return (
    <authContext.Provider value={{
        currentUser,
        error,
        loading,

        setError,
        handleRegister,
        handleLogin
    }}>
        { children }
    </authContext.Provider>
  )
}

export default AuthContextProvider