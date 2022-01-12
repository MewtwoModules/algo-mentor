import React, { useState } from 'react';


function Modal({ props, setShowModal, showModal }) {
  const { organization, qdetails, qtitle, qtype, qurl } = props;
  console.log(props);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <h2>Company:</h2>
      <p>{organization}</p>
      <h2>Title:</h2>
      <p>{qtitle}</p>
      <h2>Details:</h2>
      <p>{qdetails}</p>
      <h2>Type:</h2>
      <p>{qtype}</p>
      <h2>URL:</h2>
      <p>{qurl}</p>
      <button
        onClick={() => {
          closeModal();
          console.log(showModal);
        }}
      >
        Close
      </button>
    </div>
  );
}

export default Modal;
