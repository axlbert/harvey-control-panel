import React from 'react';
import OnOffButton from './OnOffButton';

export default function ConnectedOnOffButton({ ...props }) {
  function handleClick() {
    console.log('Connected clicked');
  }
  return <OnOffButton {...props} onClick={handleClick} />;
}
