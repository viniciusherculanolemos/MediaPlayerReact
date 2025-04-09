import React from "react";
import { useMediaPlayer } from "./MediaPlayerContext";

function VolumeControl() {
  const { volume, changeVolume } = useMediaPlayer();
  
  return (
    <input type="range" min="0" max="100" value={volume} onChange={(e) => changeVolume(Number(e.target.value))} />
  );
}

export default VolumeControl;