import axios from 'axios';
import { PRODUCT_API } from '../constants';

export const fetchProducts = async (page, filter) => {
  try {
    const resData = await axios.get(
      `${PRODUCT_API}/products?_page=${page}${filter ? filter : ''}`,
    );
    return resData;
  } catch (error) {
    throw new Error(`Error while fetching products ${error}`);
  }
};

export const fetchCategoryProducts = async (category) => {
  try {
    const resData = await axios.get(
      `${PRODUCT_API}/products?category=${category}&_limit=4`,
    );
    return resData;
  } catch (error) {
    throw new Error(`Error while fetching category products ${error}`);
  }
};
