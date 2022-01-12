import React, { useState } from 'react';
import reactDom from 'react-dom';
import Modal from './Modal.jsx';
function Question(props) {
  const { organization, qdetails, qtitle, qtype } = props.props;
  const [showModal, setShowModal] = useState(false);

  const styles = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red',
  };

  const toggleModal = () => {
    setShowModal(true);
  };
  return (
    <div>
      <div
        style={styles}
        onClick={() => {
          toggleModal();
          console.log('adf');
        }}
      >
        <p>{organization}</p>
        <p>{qtitle}</p>
        <p>{qdetails}</p>
        <p>{qtype}</p>
      </div>
      {showModal ? (
        <Modal
          props={props.props}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : null}
    </div>
  );
}

export default Question;
