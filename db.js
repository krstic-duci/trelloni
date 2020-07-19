import faker from 'faker';

/**
 *
 * @description Create random number between params
 * @param {number} min
 * @param {number} max
 * @returns Number
 */
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 *
 * @description Fake data for db.json
 * @export
 */
export function makeProducts() {
  let url;
  let products;
  let data = {
    products: [],
  };
  for (let x = 1; x < 151; x++) {
    products = {};
    url = `https://picsum.photos/id/${getRandomArbitrary(1, 1000)}/200`;
    products.id = faker.random.uuid();
    products.color = faker.commerce.color();
    products.title = faker.commerce.productName();
    products.product = faker.commerce.product();
    products.category = faker.commerce.department().toLocaleLowerCase();
    products.text = faker.lorem.text();
    products.price = faker.commerce.price();
    products.image = `${url}`;

    data.products.push(products);
  }
  return data;
}

module.exports = () => {
  makeProducts();
}