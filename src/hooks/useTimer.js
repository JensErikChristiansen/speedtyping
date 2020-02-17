import { useState, useEffect } from "react";

export default function(startTime = 30) {
  const START_TIME = startTime.toFixed(1);
  const [timeRemaining, setTime] = useState(START_TIME);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running && timeRemaining >= 0.1) {
      setTimeout(() => setTime(prev => (prev - 0.1).toFixed(1)), 100);
    } else if (running && timeRemaining < 0.1) {
      setRunning(false);
    }
  }, [timeRemaining, running]);

  return { running, timeRemaining, startTimer, stopTimer };

  function startTimer() {
    setTime(START_TIME);
    setRunning(true);
  }

  function stopTimer() {
    setRunning(false);
  }
}
