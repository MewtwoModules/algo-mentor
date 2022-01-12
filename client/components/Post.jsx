import React from 'react';
import axios from 'axios';

function Post() {
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
  };

  return (
    <div>
      <h2>Company:</h2>
      <input id='company' />
      <h2>Title:</h2>
      <input id='title' />
      <h2>Details:</h2>
      <input id='detail' />
      <h2>Type:</h2>
      <input id='type' />
      <h2>URL:</h2>
      <input id='url' />
      <button
        onClick={() => {
          handlePost();
        }}
      >
        Close
      </button>
    </div>
  );
}

export default Post;
