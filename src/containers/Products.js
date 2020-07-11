import React, { useEffect } from 'react';
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import ProductSingle from '../components/product/ProductSingle';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestProductAction,
  prevProductAction,
  nextProductAction,
} from '../store/actions/productAction';
import styles from '../css/products.module.css';

export default function Products() {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const prevPage = useSelector((state) => state.product.prevPage);
  const nextPage = useSelector((state) => state.product.nextPage);
  const totalPages = useSelector((state) => state.product.totalPages);

  useEffect(() => {
    dispatch(requestProductAction());
  }, [dispatch]);

  const prevProduct = () => {
    if (prevPage === 1) return;

    dispatch(prevProductAction());
  };

  const nextProduct = () => {
    if (nextPage === totalPages + 1) return;

    dispatch(nextProductAction());
  };

  return (
    <>
      <Switch>
        <Route path={`${match.path}/:id`}>
          <ProductSingle />
        </Route>
        <Route path={`${match.path}`}>
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
              <p
                style={{
                  textAlign: 'center',
                  color: 'red',
                  margin: '50px 0',
                  fontSize: '25px',
                }}>
                Loading...
              </p>
            )}
          </section>
          <div className={styles['pagination']}>
            <Link
              onClick={prevProduct}
              to={`${match.url}?_page=${prevPage === 1 ? 1 : prevPage - 1}`}
              style={
                prevPage === 1
                  ? { 'cursor': 'not-allowed' }
                  : { 'cursor': 'pointer' }
              }>
              Prev
            </Link>
            <Link
              onClick={nextProduct}
              to={`${match.url}?_page=${
                nextPage === totalPages + 1 ? totalPages : nextPage
              }`}
              style={
                nextPage === totalPages + 1
                  ? { 'cursor': 'not-allowed' }
                  : { 'cursor': 'pointer' }
              }>
              Next
            </Link>
          </div>
        </Route>
      </Switch>
    </>
  );
}
