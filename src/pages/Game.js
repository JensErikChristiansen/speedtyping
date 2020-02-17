import React, { useState } from "react";
import TypingArea from "../components/TypingArea";
import useTimer from "../hooks/useTimer";
import TimerButtons from "../components/TimerButtons";
import WordCount from "../components/WordCount";
import TimeRemaining from "../components/TimeRemaining";

export default function() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const { running, timeRemaining, startTimer, stopTimer, reset } = useTimer(2);

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
