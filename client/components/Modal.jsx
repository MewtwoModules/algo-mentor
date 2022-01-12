import React, { useState } from 'react';


function Modal({ props, setShowModal, showModal }) {
  const { organization, qdetails, qtitle, qtype, qurl } = props;
  console.log(props);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div id="questionStyles">
      <div id="qElement">
      <h2>Company:</h2>
      <p>{organization}</p>
      </div>
      <div id="qElement">
      <h2>Title:</h2>
      <p>{qtitle}</p>
      </div>
      <div id="qElement">
      <h2>Details:</h2>
      <p>{qdetails}</p>
      </div>
      <div id="qElement">
      <h2>Type:</h2>
      <p>{qtype}</p>
      </div>
      <div id="qElement">
      <h2>URL:</h2>
      <a href={qurl} target="_blank">{qurl}</a>
      </div>
      <div>
        <button id="closeModalBtn"
        onClick={() => {
          closeModal();
          console.log(showModal);
        }}
      >
        Close
      </button>
      </div>
    </div>
  );
}

export default Modal;
