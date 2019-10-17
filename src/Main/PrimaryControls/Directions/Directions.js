import React from 'react';

import ArrowButton from '../../ArrowButton/ArrowButton';

export default function Directions() {
  return (
    <table>
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
            <ArrowButton />
          </td>
          <td></td>
          <td>
            <ArrowButton />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <ArrowButton />
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
