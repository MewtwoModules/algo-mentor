import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [user_id, setUserId] = useState('');
  const navigate = useNavigate();
  let error;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const response = await axios.post('/api/user/verifyUser', { username, password });

    if (response.data.error) error = response.data.error;
    if (response.data.user_id) {
      setUserId(response.data.user_id);
      navigate('/companies', { state: { user_id } });
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type='text' id='username' />
        <label>Password</label>
        <input type='password' id='password' />
        <button type='submit'>Login</button>
      </form>
      <Link to='/signup'>
        <button>Sign Up</button>
      </Link>
      <div>
        <a href="/api/googleAuth"><button>Sign in with G</button></a>
      </div>

      <div>{error}</div>
    </div>
  );
}

export default Login;
