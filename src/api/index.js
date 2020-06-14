export const PRODUCT_API = 'https://fakestoreapi.com/products';
export const fetchProducts = async () => {
  try {
    const response = await fetch(PRODUCT_API);
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error('Error while fetching products');
  }
};
