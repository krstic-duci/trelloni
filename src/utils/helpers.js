import faker from 'faker';
import { PREV_PRODUCT, NEXT_PRODUCT } from '../store/action-types/actionTypes';
import { FilterValues } from '../constants';

/**
 *
 * @description Create fake id's for Redux store
 * @returns Number
 */
function makeId() {
  let _id = 0;
  return function innerMakeId() {
    return ++_id;
  };
}
export let uniqueId = makeId();

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
  let arr = [];
  for (let x = 1; x < 151; x++) {
    products = {};
    url = `https://picsum.photos/id/${getRandomArbitrary(1, 1000)}/200`;
    products.id = faker.random.uuid();
    products.color = faker.commerce.color();
    products.title = faker.commerce.productName();
    products.product = faker.commerce.product();
    products.category = faker.commerce.department().toLowerCase();
    products.text = faker.lorem.text();
    products.price = faker.commerce.price();
    products.image = `${url}`;

    arr.push(products);
  }
  console.log(JSON.stringify(arr));
}

/**
 *
 * @description Helper function for pagination pages change
 * @export
 * @param {string} actionType
 * @param {number} previousPage
 * @param {number} nextPage
 * @returns Number
 */
export function switchPages(actionType, previousPage, nextPage) {
  let pageTmp = 1;
  if (actionType === PREV_PRODUCT) {
    pageTmp = previousPage;
  } else if (actionType === NEXT_PRODUCT) {
    pageTmp = nextPage - 1;
  }
  return pageTmp;
}

/**
 *
 * @description Helper function for filtering products in productSaga.js
 * @export
 * @param {string} filterVal
 * @returns String
 */
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

/**
 *
 * @description Check for validation on email input
 * @export
 * @param {string} userEmail
 * @returns Boolean
 */
export function isEmailFieldValid(userEmail = '') {
  if (!userEmail) return;
  return (
    userEmail.includes('@') && userEmail.includes('.') && userEmail.length > 12
  );
}

/**
 *
 * @description Check for validation on pass input
 * @export
 * @param {string} userPass
 * @returns Boolean
 */
export function isPassFieldValid(userPass = '') {
  if (!userPass) return;
  return userPass.length > 6 && /.*[A-Z].*/.test(userPass);
}

/**
 *
 * @description preventDefault() function extracted
 * @export
 * @param {*} e
 */
export function forbidDefault(e) {
  e.preventDefault();
}
