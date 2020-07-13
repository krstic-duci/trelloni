import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from '../../store/actions/productAction';
import { FilterValues } from '../../constants';
import styles from '../../css/productFilter.module.css';

export default function ProductFilter() {
  const filterVal = useSelector((state) => state.product.filterVal);
  const dispatch = useDispatch();
  const [selectVal, setSelectVal] = useState(filterVal);
  const handleChangeFilter = (e) => {
    setSelectVal(e.target.value);
    dispatch(changeFilterAction(e.target.value));
  };
  return (
    <div className={styles['filterContainer']}>
      <span>Filter By:</span>
      <select onChange={handleChangeFilter} value={selectVal}>
        <option value={FilterValues.NAME}>Name</option>
        <option value={FilterValues.PRICE_DOWN}>Price &#8595;</option>
        <option value={FilterValues.PRICE_UP}>Price &#8593;</option>
      </select>
    </div>
  );
}
