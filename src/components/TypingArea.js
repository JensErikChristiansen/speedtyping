import React from "react";
import "./TypingArea.css";
import { setText } from "../redux/text";
import { connect } from "react-redux";

function TypingArea({ running, text, setText }) {
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

export default connect(state => state, { setText })(TypingArea);
