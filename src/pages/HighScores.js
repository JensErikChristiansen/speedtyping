import React from "react";
import createLocalStorage from "../util/localStorage";
import { LOCAL_STORAGE } from "../constants";

const { HIGH_SCORES } = LOCAL_STORAGE;

export default function() {
  const storage = createLocalStorage(HIGH_SCORES, []);

  return (
    <>
      <h1>High Scores</h1>
      {storage
        .get()
        .sort()
        .reverse()
        .map((score, idx) => (
          <h2 key={idx}>{score}</h2>
        ))}
    </>
  );
}
