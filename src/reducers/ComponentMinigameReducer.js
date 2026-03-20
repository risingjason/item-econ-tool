import { components, itemTable } from '../scripts/itemTable.js';
import { getRandomInt } from '../scripts/helpers.js';

function addComponentSet() {
  const componentKeys = components.keys();
  return componentKeys;
}

function grabComponents(itemBag, amount) {
  let components = [];
  let itemBagCopy = [...itemBag];

  for (let i = 0; i < amount; i++) {
    const randIdx = getRandomInt(itemBagCopy.length);
    console.log("Index: ", randIdx);

    components = [...components, ...itemBagCopy.splice(randIdx, 1)];
  }

  return { 
    newComponents: components,
    newGrabBag: itemBagCopy,
  };
}

export const initialState = {
  items: [],
  itemBag: [],
  totalComponentCount: 0,
  test: "initial",
};

export const ACTIONS = {
  NEW_INSTANCE: "NEW_INSTANCE",
  ADD_COMPONENT_SET: "ADD_COMPONENT_SET",
  GRAB_COMPONENTS: "GRAB_COMPONENTS",
  TEST: "TEST",
};

export function ComponentMinigameReducer(state, action) {
  switch (action.type) {
    case "NEW_INSTANCE":
      return initialState;
    case "ADD_COMPONENT_SET":
      return {
        ...state,
        itemBag: [...state.itemBag, ...addComponentSet()],
      };
    case "GRAB_COMPONENTS":
      const { newComponents, newGrabBag } = grabComponents(state.itemBag, action.amount);
      console.log(newComponents, newGrabBag);
      return {
        ...state,
        items: [...state.items, ...newComponents],
        itemBag: newGrabBag,
      };
    case "TEST":
      return {
        ...state,
        test: "dispatched",
      };
    default:
      throw Error("Unknown action: ", action.type);
  }
}

export default ComponentMinigameReducer;
