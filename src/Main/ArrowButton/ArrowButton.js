import React from 'react';

import './ArrowButton.css';

export default function ArrowButton({ direction }) {
  function getDirectionIcon() {
    switch (direction) {
      case 'left': return 'keyboard_arrow_left';
      case 'right': return 'keyboard_arrow_right';
      case 'down': return 'keyboard_arrow_down';
      default: return 'keyboard_arrow_up';
    }
  }

  return (
    <button className='ArrowButton'>
      <span className="ArrowButton-Icon material-icons">
        { getDirectionIcon() }
      </span>
    </button>
  );
}
