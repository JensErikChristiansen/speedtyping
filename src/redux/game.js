/**
 * @module
 */

/**
 * Used in other components used to reset themselves, ie wordCount and text.
 * @see {@link redux/text}
 * @function
 * @returns {Action}
 */
export function resetGame() {
  return {
    type: "RESET_GAME",
    payload: null
  };
}
