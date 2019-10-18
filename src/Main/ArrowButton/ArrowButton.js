import React from 'react';

import './ArrowButton.css';
import gray from './button-gray.png';

export default function ArrowButton() {
  function handleClick() {
    console.log('arrow button clicked');
  }

  const buttonStyle = { backgroundImage: `url(${gray})` };
  return (
    <button className="ArrowButton" style={buttonStyle} onClick={handleClick}>
      <span className="ArrowButton-Icon material-icons">
        keyboard_arrow_up
      </span>
    </button>
  );
}
