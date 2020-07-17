import faker from 'faker';
import { PREV_PRODUCT, NEXT_PRODUCT } from '../store/action-types/actionTypes';
import { FilterValues } from '../constants';

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

export function switchPages(actionType, previousPage, nextPage) {
  let pageTmp = 1;
  if (actionType === PREV_PRODUCT) {
    pageTmp = previousPage;
  } else if (actionType === NEXT_PRODUCT) {
    pageTmp = nextPage - 1;
  }
  return pageTmp;
}

export function filterProductsBy(filterVal) {
  let filterTmp = '';
  if (filterVal === FilterValues.PRICE_DOWN) {
    filterTmp = '&_sort=price&_order=asc';
  } else if (filterVal === FilterValues.PRICE_UP) {
    filterTmp = '&_sort=price&_order=desc';
  } else {
    filterTmp = '';
  }

  if (!filterTmp) {
    return;
  } else {
    return filterTmp;
  }
}

export function isEmailFieldValid (userEmail = '') {
  return (
    userEmail.includes('@') && userEmail.includes('.') && userEmail.length > 6
  );
};

export function isPassFieldValid (userPass = '') {
  return userPass.length > 6 && /.*[A-Z].*/.test(userPass);
};

export function forbidDefault (e) {
  e.preventDefault();
};