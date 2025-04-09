import React, { useRef, useState } from "react";
import "./Styles.css";
function App() {
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(50);

  // Função para alterar volume
  const changeVolume = (newVolume) => {
    if (videoRef.current) {
      const adjustedVolume = Math.min(Math.max(newVolume / 100, 0), 1); // Normaliza entre 0 e 1
      videoRef.current.volume = adjustedVolume;
      setVolume(Math.round(adjustedVolume * 100));
    }
  };

  // Aumentar volume
  const increaseVolume = () => {
    changeVolume(volume + 10);
  };

  // Diminuir volume
  const decreaseVolume = () => {
    changeVolume(volume - 10);
  };

  // Avançar vídeo
  const forwardVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 5;
    }
  };

  // Retroceder vídeo
  const rewindVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 5;
    }
  };

  return (
    <div
      style={{ textAlign: "center", padding: "20px" }}
      tabIndex={0} // Permite capturar eventos de teclado
      onKeyDown={(e) => {
        if (e.key === "ArrowUp") increaseVolume();
        if (e.key === "ArrowDown") decreaseVolume();
        if (e.key === "ArrowRight") forwardVideo();
        if (e.key === "ArrowLeft") rewindVideo();
      }}
    >
      <h1>Media Player</h1>
      <input
        type="file"
        accept="video/*"
        onChange={(event) => {
          const file = event.target.files[0];
          if (file) {
            videoRef.current.src = URL.createObjectURL(file);
          }
        }}
      />
      <br /><br />
      <video ref={videoRef} controls width="400"></video>
      <br /><br />
      <button data-testid="rewind-button" onClick={rewindVideo}>⏪ Retroceder 5s</button>
      <button onClick={forwardVideo}>⏩ Avançar 5s</button>
      <br /><br />
      <button onClick={decreaseVolume}>🔉 Diminuir Volume</button>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => changeVolume(Number(e.target.value))}
      />
      <span data-testid="volume-display"> Volume: {volume}% </span>
      <button onClick={increaseVolume}>🔊 Aumentar Volume</button>
    </div>
  );
}

export default App;