/**
 * @module
 */

import { createStore, combineReducers } from "redux";
import text from "./text";
import wordCount from "./wordCount";

/**
 * Used in other components used to reset themselves, ie wordCount and text.
 */
export function resetGame() {
  return {
    type: "RESET_GAME",
    payload: null
  };
}

const store = createStore(
  combineReducers({
    text,
    wordCount
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;

/**
 * @typedef {Object} Action
 * An object passed into redux's dispatch method.
 * @property {string} type the type of action
 * @property {any} payload the data which you wish to set
 */

/**
 * @typedef {Function} ActionCreator
 * A wrapper function that creates an [Action]{@link Action}.
 * @returns {Action}
 */
