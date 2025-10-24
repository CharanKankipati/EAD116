import React, { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const start = () => {
    if (intervalId) return; // already running
    const id = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);
    setIntervalId(id);
  };

  const pause = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const reset = () => {
    pause();
    setTime(0);
  };
  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <>
      <h1>
        {String(Math.floor(time / 60)).padStart(2, "0")}:
        {String(time % 60).padStart(2, "0")}
      </h1>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
