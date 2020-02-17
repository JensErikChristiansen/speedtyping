import React from "react";

export default function({ running, text }) {
  return <h2>Word Count: {!running && calculate()}</h2>;

  function calculate() {
    return text !== "" ? text.trim().split(" ").length : 0;
  }
}
