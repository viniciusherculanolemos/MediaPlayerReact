import React from "react";
import { useMediaPlayer } from "./MediaPlayerContext";

function VideoLoader() {
  const { fetchVideo, videoUrl } = useMediaPlayer();

  return (
    <div>
      <button onClick={fetchVideo}>Carregar Vídeo</button>
      {videoUrl && <video src={videoUrl} controls width="400"></video>}
    </div>
  );
}

export default VideoLoader;