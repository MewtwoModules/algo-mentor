import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [user_id, setUserId] = useState('');
  const navigate = useNavigate();
  let error;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await axios.post('/api/user/createUser', {
      name,
      email,
      username,
      password,
    });

    if (response.data.error) error = response.data.error;
    if (response) {
      setUserId(response.data.user_id);
      navigate('/companies', { state: { user_id } });
    }
  };
  return (
    <div>
      <div id="formStyles">
        <h1 id="loginTitle">Sign Up</h1>
      </div>  
      <div id="formStyles">
        <form onSubmit={handleSubmit}>
        <div>
          <label id="formLabel">Name</label>
        </div>
        <div>
          <input class="formInput" type='text' id='name' />
        </div>
        <div>
          <label id="formLabel">Email</label>
        </div>
        <div>
          <input class="formInput" type='text' id='email' />
        </div>
        <div>  
          <label id="formLabel">Username</label>
        </div>
        <div>
          <input class="formInput" type='text' id='username' />
        </div>
        <div>  
          <label id="formLabel">Password</label>
        </div>
        <div>  
          <input class="formInput" type='password' id='password' />
        </div>
        <div id="formStyles">
          <button id="navBtn" type='submit'>Sign Up</button>
          <Link to='/'>
          <button id="navBtn">Login</button>
          </Link>
        </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
