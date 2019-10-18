import React from 'react';

import './Directions.css';
import ArrowButton from '../../ArrowButton/ArrowButton';

export default function Directions() {
  return (
    <table className="Directions">
      <tbody>
        <tr>
          <td></td>
          <td>
            <ArrowButton />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <ArrowButton direction="left" />
          </td>
          <td></td>
          <td>
            <ArrowButton direction="right" />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <ArrowButton direction="down" />
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
