import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [user_id, setUserId] = userState('');
  const navigate = useNavigate();
  let error;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const response = await axios.post('/login', { username, password });

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
        <input type='text' id='password' />
        <button type='submit'>Login</button>
      </form>
      <Link to='/signup'>
        <button>Sign Up</button>
      </Link>
      <div>{error}</div>
    </div>
  );
}

export default Login;
