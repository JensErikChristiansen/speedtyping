import { useState, useEffect } from "react";

export default function(startTime = 30) {
  const [timeRemaining, setTime] = useState(startTime);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running && timeRemaining !== 0) {
      setTimeout(() => setTime(prev => (prev * 10 - 1) / 10), 100);
    } else if (running && timeRemaining < 0.1) {
      setRunning(false);
    }
  }, [timeRemaining, running]);

  return { running, timeRemaining, startTimer, stopTimer };

  function startTimer() {
    setTime(startTime);
    setRunning(true);
  }

  function stopTimer() {
    setRunning(false);
  }
}
