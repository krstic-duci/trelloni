import React from 'react';
import { useParams } from 'react-router-dom';
// import { fetchSingleProduct } from '../../api';

export default function ProductSingle() {
  const { id } = useParams();
  return (
    <>
      current id is {id}
      {/* {singleProduct.length > 0 ? (
        <p>Duca</p>
      ) : (
        <p
          style={{
            textAlign: 'center',
            color: 'red',
            margin: '50px 0',
            fontSize: '25px',
          }}>
          Loading...
        </p>
      )} */}
    </>
  );
}
