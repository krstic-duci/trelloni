import React from 'react';
import { Link } from 'react-router-dom';

export default function NoMatch() {
  return (
    <div>
      <p>Ooops, we don't know that location. Please try our Home page</p>
      <Link to='/'>Home</Link>
    </div>
  );
}
