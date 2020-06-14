import React, { useEffect } from 'react';
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import ProductSingle from '../components/product/ProductSingle';
import { useDispatch, useSelector } from 'react-redux';
import { requestProductAction } from '../store/actions/productAction';
import styles from '../css/products.module.css';

export default function Products() {
  let match = useRouteMatch();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    dispatch(requestProductAction());
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Route path={`${match.path}/:id`}>
          <ProductSingle />
        </Route>
        <Route path={match.path}>
          <section className={styles['products-wrapper']}>
            {products.length > 0 ? (
              products.map((elem, i) => (
                <Link
                  key={i}
                  to={`${match.url}/${elem.id}`}
                  className={styles['products-container']}>
                  <figure>
                    <img alt={elem.title} src={elem.image} />
                    <figcaption>{elem.title}</figcaption>
                  </figure>
                  <p>{elem.price}</p>
                </Link>
              ))
            ) : (
              <p style={{ textAlign: 'center' }}>Loading...</p>
            )}
          </section>
        </Route>
      </Switch>
    </>
  );
}
