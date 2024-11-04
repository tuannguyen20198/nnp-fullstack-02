import React, { useRef, useState } from "react";

export default function VideoPlayer() {
  const ref = useRef();
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    ref.current.play()
    setIsPlaying(true)
  }

  const handlePause = () => {
    ref.current.pause()
    setIsPlaying(false)
  }

  return (
    <div className="max-w-[500px] space-y-4 p-8 mx-auto">
      <h1 ref={ref} className="text-center font-bold text-3xl">
        Video Player
      </h1>
      <video
        ref={ref}
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
      />
      <div className="flex justify-between">
        <button className="text-orange-500 font-semibold" onClick={handlePause}>Pause</button>
        <div>{isPlaying ? "Playing":"Pause"}</div>
        <button className="text-indigo-500 font-semibold" onClick={handlePlay}>Play</button>
      </div>
    </div>
  );
}
