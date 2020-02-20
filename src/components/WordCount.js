import React, { useEffect } from "react";
import { calculateWordCount } from "../redux/wordCount";
import { connect } from "react-redux";

function WordCount({ running, text, wordCount, calculateWordCount }) {
  useEffect(() => {
    if (!running) {
      calculateWordCount(text);
    }
  }, [running, text, wordCount, calculateWordCount]);

  return <h2>Word Count: {!running && wordCount}</h2>;
}

export default connect(state => state, { calculateWordCount })(WordCount);
