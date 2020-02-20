export function calculateWordCount(text) {
  return {
    type: "SET_WORD_COUNT",
    payload: text
  };
}

export default function reducer(state = 0, { type, payload: text }) {
  switch (type) {
    case "SET_WORD_COUNT":
      return text !== "" ? text.trim().split(" ").length : 0;
    case "RESET_GAME":
      return 0;
    default:
      return state;
  }
}
