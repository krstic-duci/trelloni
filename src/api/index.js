import axios from 'axios';

export const PRODUCT_API = 'http://localhost:5000';
export const fetchProducts = async (page) => {
  try {
    const resData = await axios.get(`${PRODUCT_API}/products?_page=${page}`);
    return resData;
  } catch (error) {
    throw new Error(`Error while fetching products ${error}`);
  }
};

export const fetchSingleProduct = async (id) => {
  try {
    const response = await fetch(`${PRODUCT_API}/products/${id}`, {
      mode: 'cors',
    });
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error('Error while fetching single product');
  }
};
