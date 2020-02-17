import React from "react";
// import useTimer from "./hooks/useTimer";

export default function({ toggleTimer, running, reset }) {
  return <button onClick={toggleTimer}>{running ? "Stop" : "Start"}</button>;
}
