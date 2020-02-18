import React, { useState, useEffect, useMemo } from "react";
import TypingArea from "../components/TypingArea";
import useTimer from "../hooks/useTimer";
import TimerButtons from "../components/TimerButtons";
import WordCount from "../components/WordCount";
import TimeRemaining from "../components/TimeRemaining";
import { LOCAL_STORAGE } from "../constants";
import createLocalStorage from "../util/localStorage";

const { HIGH_SCORES } = LOCAL_STORAGE;

export default function() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const { running, timeRemaining, startTimer, stopTimer, reset } = useTimer(2);
  const storage = createLocalStorage(HIGH_SCORES, []);

  useEffect(() => {
    if (wordCount > 0) {
      storage.set(prev => [...prev, wordCount]);
    }
  }, [wordCount, storage]);

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
    setWordCount(0);
    setText("");
    startTimer();
  }
}
