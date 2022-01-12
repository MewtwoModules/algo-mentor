import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import Dropdown from './Dropdown.jsx';

function Post() {
  const [orgs, setOrgs] = useState([]);

  useEffect(async () => {
    try {
      //{data:[{"organization":"facebook"},{"organization":"testing"},{"organization":"codesmith"}]}
      const response = await axios.get('/api/questions/org');
      //array of orgs eg ['facebook', 'testing', 'codesmith']
      setOrgs(response.data.map((obj) => obj.organization));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handlePost = () => {
    const qTitle = document.getElementById('title').value;
    const qDetails = document.getElementById('detail').value;
    const qType = document.getElementById('type').value;
    const qURL = document.getElementById('url').value;
    const response = axios.post('/api/question', {
      qTitle,
      qDetails,
      qType,
      qURL,
    });

    //check if success or not and add message?
  };

  const categories = ['Algo', 'Systems Design', 'Behavioral', 'Misc'];

  return (
    <div>
      <NavBar />
      <h2>Company:</h2>
      <Dropdown id='company' options={orgs} />
      <h2>Title:</h2>
      <input id='title' />
      <h2>Details:</h2>
      <input id='detail' />
      <h2>Type:</h2>
      <Dropdown id='type' options={categories} />
      <h2>URL:</h2>
      <input id='url' />
      <button
        onClick={() => {
          handlePost();
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Post;
