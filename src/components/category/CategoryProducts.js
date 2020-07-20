import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { requestCategoryAction } from '../../store/actions/categoryAction';
import {
  getCategoryProducts,
  getCategoryIsLoading,
  getErrorCategory,
} from '../../store/selectors/selectors';
import styles from '../../css/categoryProducts.module.css';

export default function CategoryProducts({ category, productId }) {
  const dispatch = useDispatch();
  const categoryProducts = useSelector(getCategoryProducts);
  // Filter the elements that we are already seeing due to
  // the json-server limitations
  const filterCategoryProducts = categoryProducts.filter(
    (elem) => elem.id !== productId,
  );
  const categoryIsLoading = useSelector(getCategoryIsLoading);
  const errorCategory = useSelector(getErrorCategory);

  useEffect(() => {
    dispatch(requestCategoryAction(category));
  }, [category, dispatch]);

  return (
    <>
      <section className={styles['category-container']}>
        {errorCategory ? (
          errorCategory
        ) : categoryIsLoading ? (
          <ClimbingBoxLoader loading={true} size={20} color={'#00d8ff'} />
        ) : (
          <>
            <h3 style={{ textAlign: 'center' }}>Similar products: </h3>
            <div className={styles['category-elements-wrapper']}>
              {filterCategoryProducts.map((elem) => (
                <div key={elem.id}>
                  <img src={elem.image} alt={elem.title} />
                  <p>{elem.title}</p>
                  <p>$: {elem.price}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
