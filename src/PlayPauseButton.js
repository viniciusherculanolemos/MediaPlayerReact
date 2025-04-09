import React from "react";
import { useMediaPlayer } from "./MediaPlayerContext";

function PlayPauseButton() {
  const { isPlaying, togglePlayPause } = useMediaPlayer();
  
  return <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>;
}

export default PlayPauseButton;