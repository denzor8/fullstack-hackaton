import React, { useContext, useState } from 'react';
import axios from 'axios';

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = 'http://35.234.109.231/api';

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleRegister(obj, name) {
        setLoading(true);
        try {
            const res = await axios.post(`${API}/account/register/`, obj);
            localStorage.setItem("name", name);
            console.log(res);
        } catch (err) {
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
        } catch (err) {
            console.log(err);
            setError([err.response.data.detail]);
        }
    }

    async function checkAuth() {
        let tokens = JSON.parse(localStorage.getItem('tokens'))

        try {
            const Authorization = `Bearer ${tokens.access}`;
            let res = await axios.post(`${API}/account/refresh/`,
                { refresh: tokens.refresh },
                { headers: { Authorization } }
            );
            localStorage.setItem('tokens', JSON.stringify({
                refresh: tokens.refresh,
                access: res.data.access
            }));

            let currentUser = localStorage.getItem('email'); //на всякий случай обновляем юзера
            setCurrentUser(currentUser);
        } catch (error) {
            console.log(error);
        }
    }
    function handleLogout(navigate) {
        localStorage.removeItem("tokens");
        localStorage.removeItem("email");
        setCurrentUser(false);
        navigate("/signIn");
    };

    async function logout() {
        const tokens = JSON.parse(localStorage.getItem('tokens'));
        const Authorization = `Bearer ${tokens.access}`;
        const config = {
				headers: {
					Authorization
				}
		};
        await axios.post(`${API}/account/logout/`, config)
    }

    function handleLogout(navigate) {
        localStorage.removeItem("tokens");
        localStorage.removeItem("email");
        setCurrentUser(false);
        navigate("/signIn");
    };

  return (
    <authContext.Provider value={{
        currentUser,
        error,
        loading,

        setError,
        handleRegister,
        handleLogin,
        checkAuth,
        logout,
        handleLogout
    }}>
        { children }
    </authContext.Provider>
  )
}

export default AuthContextProvider