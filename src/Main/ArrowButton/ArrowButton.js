import React from 'react';

import './ArrowButton.css';
import gray from './button-gray.png';

export default function ArrowButton({ direction }) {
  function handleClick() {
    console.log('arrow button clicked');
  }

  function getDirectionIcon() {
    switch (direction) {
      case 'left': return 'keyboard_arrow_left';
      case 'right': return 'keyboard_arrow_right';
      case 'down': return 'keyboard_arrow_down';
      default: return 'keyboard_arrow_up';
    }
  }

  const buttonStyle = { backgroundImage: `url(${gray})` };
  return (
    <button className="ArrowButton" style={buttonStyle} onClick={handleClick}>
      <span className="ArrowButton-Icon material-icons">
        { getDirectionIcon() }
      </span>
    </button>
  );
}
