function makeId() {
  let _id = 0;
  return function innerMakeId() {
    return ++_id;
  };
}

export let uniqueId = makeId();

export function customFilter(obj, id, isDelete, isMove) {
  let objVals = Object.values(obj);
  const objLength = objVals.length;

  for (let i = 0; i < objLength; i++) {
    let innerObjLength = objVals[i].length;

    for (let x = 0; x < innerObjLength; x++) {
      if (objVals[i][x].id === id) {
        if (isDelete) {
          deleteCard(obj, objVals[i][x]);
        }
        if (isMove) {
          moveCard(obj, objVals[i][x]);
        }
      }
    }
  }
}

function deleteCard(stateCardsObj, elemToDelete) {
  console.log(stateCardsObj);
}

function moveCard(stateCardsObj, elemToMove) {}
