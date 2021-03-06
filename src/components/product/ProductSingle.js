import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CategoryProducts from '../category/CategoryProducts';
import { addProductAction } from '../../store/actions/productAction';
import { getProducts } from '../../store/selectors/selectors';
import styles from '../../css/singleProduct.module.css';

export default function ProductSingle() {
  const [addedToCartText, setAddedToCartText] = useState(false);
  const { id } = useParams();
  const products = useSelector(getProducts);
  const singleProduct = products.find((elem) => elem.id === id);
  const singleProductCategory = singleProduct.category;
  const dispatch = useDispatch();

  const addProductToCart = () => {
    setAddedToCartText(true);
    dispatch(addProductAction(+singleProduct.price));
    setTimeout(() => setAddedToCartText(false), 2000);
  };

  return (
    <>
      <div className={styles['singleProductContainer']}>
        <div>
          <div>
            <Link to='/products'>Back to Products</Link>
          </div>
          <figure>
            <img src={singleProduct.image} alt={singleProduct.title} />
            <figcaption>{singleProduct.title}</figcaption>
          </figure>
          <p>{singleProduct.text}</p>
        </div>
        <div>
          <p>
            Available in{' '}
            <span style={{ color: singleProduct.color }}>
              {singleProduct.color}
            </span>{' '}
            color
          </p>
          <p>$ {singleProduct.price}</p>
          <p>{singleProduct.product}</p>
        </div>
        <div>
          <button onClick={addProductToCart}>Add to Cart</button>
          <span
            style={
              addedToCartText ? { display: 'inline' } : { display: 'none' }
            }
          >
            Added
          </span>
        </div>
      </div>

      <CategoryProducts category={singleProductCategory} productId={id} />
    </>
  );
}
