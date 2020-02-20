export function setText(text) {
  return {
    type: "SET_TEXT",
    payload: text
  };
}

export default function reducer(state = "", { type, payload }) {
  switch (type) {
    case "SET_TEXT":
      return payload;
    case "RESET_GAME":
      return "";
    default:
      return state;
  }
}
