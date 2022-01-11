import React from 'react';
function Question(props) {
  const { organization, qdetails, qtitle, qtype } = props.props;
  const styles = {
    display: 'flex',
    flexDirection: 'row',
  };
  return (
    <div style={styles}>
      <p>{organization}</p>
      <p>{qtitle}</p>
      <p>{qdetails}</p>
      <p>{qtype}</p>
    </div>
  );
}

export default Question;
