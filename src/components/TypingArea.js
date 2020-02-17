import React from "react";
import "./TypingArea.css";

export default function({ running, text, setText }) {
  return (
    <textarea
      disabled={!running}
      name="typingArea"
      onChange={handleChange}
      value={text}
    />
  );

  function handleChange(e) {
    setText(e.target.value);
  }
}
