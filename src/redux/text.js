/**
 @module
*/

/**
 * Honestly, this doesn't need to be in redux and can just be stored locally; it's just here for practice...
 * @function setText
 * @param {string} text
 * @returns {Action}
 */
export function setText(text) {
  return {
    type: "SET_TEXT",
    payload: text
  };
}

/**
 * Text reducer
 * @function textReducer
 * @param {object} state
 * @param {Action} action
 */
export default function textReducer(state = "", { type, payload }) {
  switch (type) {
    case "SET_TEXT":
      return payload;
    case "RESET_GAME":
      return "";
    default:
      return state;
  }
}
