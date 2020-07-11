import React from 'react';
import { useSelector } from 'react-redux';

export default function ProductCart() {
  const totalPrice = useSelector((state) => state.product.totalPrice);
  return <span>Total: $ {totalPrice}</span>;
}
