import React from 'react';

export default function CardShift({ elemIndex }) {
  return (
    <select>
      <option value=''>new</option>
      <option value=''>in progress</option>
      <option value=''>finished</option>
    </select>
  );
}
