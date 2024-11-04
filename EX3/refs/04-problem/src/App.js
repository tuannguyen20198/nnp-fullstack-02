import React from "react";

export default function Stopwatch() {
  const timerId = setInterval(() => console.log("count"), 1000);
  clearInterval(timerId);

  return (
    <div className="p-12 mx-auto space-y-4 max-w-[300px]">
      <div className="font-bold text-center text-3xl">Timer: 0s</div>
      <div className="flex justify-between">
        <button className="text-amber-500 font-bold">Stop</button>
        <button className="text-green-500 font-bold">Start</button>
      </div>
    </div>
  );
}
