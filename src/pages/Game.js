import React, { useEffect } from "react";
import TypingArea from "../components/TypingArea";
import useTimer from "../hooks/useTimer";
import TimerButtons from "../components/TimerButtons";
import WordCount from "../components/WordCount";
import TimeRemaining from "../components/TimeRemaining";
import { LOCAL_STORAGE } from "../constants";
import createLocalStorage from "../util/localStorage";
import { resetGame } from "../redux";
import { connect } from "react-redux";

const { HIGH_SCORES } = LOCAL_STORAGE;

function Game({ text, wordCount, resetGame }) {
  const { running, timeRemaining, startTimer, stopTimer, reset } = useTimer(2);
  const storage = createLocalStorage(HIGH_SCORES, []);

  useEffect(() => {
    if (wordCount > 0) {
      storage.set(prev => [...prev, wordCount]);
    }
  }, [wordCount, storage]);

  return (
    <>
      <TypingArea running={running} />
      <TimerButtons toggleTimer={toggleTimer} running={running} reset={reset} />
      <TimeRemaining timeRemaining={timeRemaining} />
      <WordCount running={running} />
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
    resetGame();
    startTimer();
  }
}

export default connect(state => state, {
  resetGame
})(Game);
