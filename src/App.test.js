import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

test("Renderiza o título Media Player corretamente", () => {
  render(<App />);
  
  const titleElement = screen.getByText("Media Player");
  expect(titleElement).toBeInTheDocument();
});

test("Aumenta o volume ao clicar no botão", async () => {
  render(<App />);
  
  const buttonIncrease = screen.getByText("🔊 Aumentar Volume");
  const volumeDisplay = screen.getByTestId("volume-display");

  fireEvent.click(buttonIncrease);

  await waitFor(() => {
    expect(volumeDisplay).toHaveTextContent(/Volume: 60%/);
  });
});

test("Retrocede o vídeo ao clicar no botão", () => {
  render(<App />);
  
  const buttonRewind = screen.getByTestId("rewind-button");
  fireEvent.click(buttonRewind);
  
  expect(buttonRewind).toBeInTheDocument();
});