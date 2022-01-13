import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles.scss';

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
      <div id="formStyles">
        <h1 id="loginTitle">Login</h1>
      </div>
      <div id="formStyles">
        <form onSubmit={handleSubmit}>
          <div>
            <label id="formLabel"><b>Username</b></label>
            <input class="formInput" type='text' id='username' />
          </div>
          <div>
            <label id="formLabel"><b>Password</b></label>
            <input class="formInput" type='password' id='password' />
          </div>
          <div id="formStyles">
            <button  id="navBtn" type='submit'>Login</button>
          </div>
        </form>
      </div>
      <div id="formStyles">
      <Link to='/signup'>
        <button id="navBtn">Sign Up</button>
      </Link>
        <a href="/api/googleAuth"><button id="navBtn">Sign in with G</button></a>
      </div>

      <div>{error}</div>
    </div>
  );
}

export default Login;
