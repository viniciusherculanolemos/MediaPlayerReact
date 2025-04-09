import React, { createContext, useState, useContext } from "react";

// Criando o contexto do Media Player
const MediaPlayerContext = createContext();

// Criando o Provider que gerencia o estado global do player
export function MediaPlayerProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [videoUrl, setVideoUrl] = useState("");

  // Função para alternar entre play/pause
  function togglePlayPause() {
    setIsPlaying(!isPlaying);
  }

  // Função para ajustar o volume
  function changeVolume(newVolume) {
    setVolume(newVolume);
  }

  // Simula a busca de um vídeo via API
  async function fetchVideo() {
    // API fictícia, pode substituir por um endpoint real
    const response = await fetch("https://api.sampleapis.com/video/random");
    const data = await response.json();
    setVideoUrl(data.videoUrl);
  }

  return (
    <MediaPlayerContext.Provider value={{ isPlaying, volume, videoUrl, togglePlayPause, changeVolume, fetchVideo }}>
      {children}
    </MediaPlayerContext.Provider>
  );
}

// Criando um hook para facilitar o acesso ao contexto
export function useMediaPlayer() {
  return useContext(MediaPlayerContext);
}