import React, { useState, useEffect } from "react";
import TypingArea from "../components/TypingArea";
import useTimer from "../hooks/useTimer";
import TimerButtons from "../components/TimerButtons";
import WordCount from "../components/WordCount";
import TimeRemaining from "../components/TimeRemaining";
import { LOCAL_STORAGE } from "../constants";

const { HIGH_SCORES } = LOCAL_STORAGE;

export default function() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const { running, timeRemaining, startTimer, stopTimer, reset } = useTimer(2);

  useEffect(() => {
    if (wordCount > 0) {
      const currentStorage = localStorage.getItem(HIGH_SCORES);

      if (!currentStorage) {
        localStorage.setItem(HIGH_SCORES, JSON.stringify([wordCount]));
      } else {
        const json = JSON.parse(currentStorage);
        localStorage.setItem(HIGH_SCORES, JSON.stringify([...json, wordCount]));
      }
    }
  }, [wordCount]);

  return (
    <>
      <TypingArea running={running} text={text} setText={setText} />
      <TimerButtons toggleTimer={toggleTimer} running={running} reset={reset} />
      <TimeRemaining timeRemaining={timeRemaining} />
      <WordCount
        running={running}
        text={text}
        wordCount={wordCount}
        setWordCount={setWordCount}
      />
    </>
  );

  function toggleTimer() {
    if (running) {
      stopTimer();
    } else {
      startGame();
    }
  }

  function startGame() {
    setText("");
    startTimer();
  }
}
