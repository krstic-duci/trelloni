import React, { useEffect } from 'react';
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import ProductSingle from '../components/product/ProductSingle';
import ProductFilter from '../components/product/ProductFilter';
import {
  requestProductAction,
  prevProductAction,
  nextProductAction,
  productCleanupAction,
} from '../store/actions/productAction';
import {
  getProducts,
  getPrevPage,
  getNextPage,
  getTotalPages,
  getFilterVal,
  getProductsLoading,
  getErrorProduct,
} from '../store/selectors/selectors';
import { filterProductsBy } from '../utils/helpers';
import styles from '../css/products.module.css';

export default function Products() {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  const products = useSelector(getProducts);
  const productsLoading = useSelector(getProductsLoading);
  const errorProduct = useSelector(getErrorProduct);
  const prevPage = useSelector(getPrevPage);
  const nextPage = useSelector(getNextPage);
  const totalPages = useSelector(getTotalPages);
  const filterVal = useSelector(getFilterVal);

  useEffect(() => {
    dispatch(requestProductAction(true));
    return () => dispatch(productCleanupAction());
  }, [dispatch]);

  const prevProduct = () => {
    if (prevPage === 1) return;

    window.scrollTo(0, 0);
    dispatch(prevProductAction());
  };

  const nextProduct = () => {
    if (nextPage === totalPages + 1) return;

    window.scrollTo(0, 0);
    dispatch(nextProductAction());
  };

  const isFilterOn = filterProductsBy(filterVal)
    ? filterProductsBy(filterVal)
    : '';
  const linkPrevPage = prevPage === 1 ? 1 : prevPage - 1;
  const linkNextPage = nextPage === totalPages + 1 ? totalPages : nextPage;

  return (
    <>
      <Switch>
        <Route path={`${match.path}/:id`}>
          <ProductSingle />
        </Route>

        <Route path={`${match.path}`}>
          {errorProduct ? (
            errorProduct
          ) : (
            <section>
              {productsLoading ? (
                <div className={styles['loading-wrapper']}>
                  <ClimbingBoxLoader
                    loading={true}
                    size={40}
                    color={'#00d8ff'}
                  />
                </div>
              ) : (
                <div>
                  <section className={styles['products-wrapper']}>
                    <ProductFilter />

                    {products.map((elem, i) => (
                      <Link
                        key={i}
                        to={`${match.url}/${elem.id}`}
                        className={styles['products-container']}
                      >
                        <figure>
                          <img alt={elem.title} src={elem.image} />
                          <figcaption>{elem.title}</figcaption>
                        </figure>
                        <p>{elem.price}</p>
                      </Link>
                    ))}
                  </section>
                  <div className={styles['pagination']}>
                    {/* prettier-ignore */}
                    <Link
                      onClick={prevProduct}
                      to={
                        `${match.url}?_page=${linkPrevPage}${isFilterOn}`
                      }
                      style={
                        prevPage === 1
                          ? { cursor: 'not-allowed' }
                          : { cursor: 'pointer' }
                      }
                    >
                      Prev
                    </Link>

                    {/* prettier-ignore */}
                    <Link
                      onClick={nextProduct}
                      to={
                        `${match.url}?_page=${linkNextPage}${isFilterOn}`
                      }
                      style={
                        nextPage === totalPages + 1
                          ? { cursor: 'not-allowed' }
                          : { cursor: 'pointer' }
                      }
                    >
                      Next
                    </Link>
                  </div>
                </div>
              )}
            </section>
          )}
        </Route>
      </Switch>
    </>
  );
}
