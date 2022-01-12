import React from 'react';

function Dropdown(props) {
  const { options } = props;
  const id = { props };
  const dropdownOptions = [];
  for (const option of options) {
    dropdownOptions.push(
      <option value={option} key={option}>
        {option}
      </option>
    );
  }

  return <select id={id}>{dropdownOptions}</select>;
}

export default Dropdown;
