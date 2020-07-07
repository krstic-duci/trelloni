import faker from 'faker';

function makeId() {
  let _id = 0;
  return function innerMakeId() {
    return ++_id;
  };
}

export let uniqueId = makeId();

export function makeProducts() {
  let url;
  let products;
  let arr = [];
  for (let x = 1; x < 151; x++) {
    products = {};
    url = `https://picsum.photos/id/${x}/200`;
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

/**
 * @description Handler for cards that needs to be deleted, moved and
 * for updating textarea
 * @param {Object} obj state.cards object
 * @param {Object|String} payloadFromReducer action.payload
 * @param {Boolean} isDelete
 * @param {Boolean} isMove
 * @param {Boolean} isUpdateTextarea
 */
export function customFilter(
  objState,
  payloadFromReducer,
  isDelete,
  isMove,
  isUpdateTextarea,
) {
  let objStateDelete = {};
  let objStateMove = {};

  let objStateVals = Object.values(objState);
  const objLength = objStateVals.length;

  // Double "for loop" for checking every field with given id
  for (let i = 0; i < objLength; i++) {
    let innerObjLength = objStateVals[i].length;

    for (let x = 0; x < innerObjLength; x++) {
      let innerObjVal = objStateVals[i][x];

      if (isDelete && innerObjVal.id === payloadFromReducer) {
        objStateDelete.data = objStateVals[i].filter(
          (elem) => elem.id !== innerObjVal.id,
        );
        objStateDelete.whatColumn = innerObjVal.status;
        return objStateDelete;
      }
      if (isMove && innerObjVal.id === payloadFromReducer.id) {
        let item = { ...innerObjVal };

        objStateVals[i].splice(x, 1);

        item.status = payloadFromReducer.status;
        objStateMove.data = item;
        objStateMove.whatColumn = payloadFromReducer.status;
        return objStateMove;
      }
      if (isUpdateTextarea && innerObjVal.id === payloadFromReducer.id) {
        objStateVals[i].splice(x, 1); // problem lies here maybe for textarea update

        innerObjVal.txtArea = payloadFromReducer.txtArea;
        return innerObjVal;
      }
    }
  }
}
