export const PRODUCT_API = 'http://localhost:5000';
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${PRODUCT_API}/products`, {
      mode: 'cors',
    });
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error('Error while fetching products');
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
