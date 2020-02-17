import React, { useEffect } from "react";

export default function({ running, text, wordCount, setWordCount }) {
  useEffect(() => {
    if (!running) {
      const wordCount = text !== "" ? text.trim().split(" ").length : 0;
      setWordCount(wordCount);
    }
  }, [running, text, wordCount, setWordCount]);

  return <h2>Word Count: {!running && wordCount}</h2>;
}
