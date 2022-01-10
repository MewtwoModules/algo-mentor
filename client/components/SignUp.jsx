import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [user_id, setUserId] = userState('');
  const navigate = useNavigate();
  let error;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await axios.post('/signup', { name, email, username, password });
    
    if (response.data.error) error = response.data.error;
    if (response.data.user_id) {
      setUserId(response.data.user_id);
      navigate('/companies', { state: { user_id } });
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={}>
        <label>Name</label>
        <input type='text' id="name"/>
        <label>Email</label>
        <input type='text' id="email"/>
        <label>Username</label>
        <input type='text' id="username"/>
        <label>Password</label>
        <input type='text' id="password"/>
        <button type='submit'>Sign Up</button>
      </form>
      <Link to='/'>
        <button>Login</button>
      </Link>
    </div>
  );
}

export default SignUp;
