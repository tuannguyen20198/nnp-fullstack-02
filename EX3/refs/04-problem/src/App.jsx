import React from "react";
import { useState,useRef,useEffect } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false);
  const timerId = useRef(null);
  useEffect(() => {
    if (isRunning) {
      timerId.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && timerId.current) {
      clearInterval(timerId.current); 
    }

    return () => clearInterval(timerId.current);
  }, [isRunning]);  

  const handleStart = () => {
    setIsRunning(true); // Bắt đầu timer
  };

  const handleStop = () => {
    setIsRunning(false); // Dừng timer
  };
  return (
    <div className="p-12 mx-auto space-y-4 max-w-[300px]">
      <div className="font-bold text-center text-3xl">Timer: {seconds}s</div>
      <div className="flex justify-between">
        <button className="text-amber-500 font-bold" onClick={handleStop}>Stop</button>
        <button className="text-green-500 font-bold" onClick={handleStart}>Start</button>
      </div>
    </div>
  );
}
