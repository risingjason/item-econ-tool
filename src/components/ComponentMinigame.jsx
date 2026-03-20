import { useReducer } from "react";
import { tftCdnBaseUrl, tftImagesUrl } from "../scripts/links";
import { initialState, ACTIONS, ComponentMinigameReducer as reducer } from '../reducers/ComponentMinigameReducer.js';

export function ComponentMinigame() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Component Minigame</p>
      <p>Test</p>
      <p>{state.test}</p>
      <button onClick={() => dispatch({type: ACTIONS.TEST})}>Click me</button>
      <br />
      <p>Item Bag</p>
      <button onClick={() => dispatch({type: ACTIONS.ADD_COMPONENT_SET})}>Add components</button>
      <p>{JSON.stringify(state.itemBag)}</p>
      <p>Items</p>
      <button onClick={() => dispatch({type: ACTIONS.GRAB_COMPONENTS, amount: 3} )}>Generate Components</button>
      <p>{JSON.stringify(state.items)}</p>
    </>
  )
}

export default ComponentMinigame;