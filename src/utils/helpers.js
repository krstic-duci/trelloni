import faker from 'faker';

function makeId() {
  let _id = 0;
  return function innerMakeId() {
    return ++_id;
  };
}

export let uniqueId = makeId();

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function makeProducts() {
  let url;
  let products;
  let arr = [];
  for (let x = 1; x < 151; x++) {
    products = {};
    url = `https://picsum.photos/id/${getRandomArbitrary(1, 1000)}/200`;
    products.id = faker.random.uuid();
    products.color = faker.commerce.color();
    products.title = faker.commerce.productName();
    products.product = faker.commerce.product();
    products.text = faker.lorem.text();
    products.price = faker.commerce.price();
    products.image = `${url}`;

    arr.push(products);
  }
  console.log(JSON.stringify(arr));
}
