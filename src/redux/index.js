import { createStore, combineReducers } from "redux";
import text from "./text";
import wordCount from "./wordCount";

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
