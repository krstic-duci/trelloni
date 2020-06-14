import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductSingle() {
  let { id } = useParams();
  return <h3>Requested topic ID: {id}</h3>;
}
