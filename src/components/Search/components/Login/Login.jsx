import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/authContext';

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin, error, setError } = useContext(authContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleAuth() {
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    handleLogin(formData, email, navigate);
  };

  useEffect(() => {
    setError(false);
  }, []);

  return error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="text" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleAuth}>Login</button>
    </div>
  )
}

export default Login