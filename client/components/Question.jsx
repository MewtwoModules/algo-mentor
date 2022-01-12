import React, { useState } from 'react';
import reactDom from 'react-dom';
import Modal from './Modal.jsx';
function Question(props) {
  const { organization, qdetails, qtitle, qtype, difficulty } = props.props;
  const [showModal, setShowModal] = useState(false);

  const styles = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black',
  };

  const toggleModal = () => {
    setShowModal(true);
  };
  return (
    <div id="questionContainer">
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
        <p>{difficulty}</p>
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
