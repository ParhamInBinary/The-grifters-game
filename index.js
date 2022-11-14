import { startGame } from "./startGame.js";
import { playGame } from "./playGame.js";
import { controlCupNrInput } from "./controlCupNrInput.js";
import { stopPlaying } from "./stopPlaying.js";

const values = {
  balance: 50,
  redBall: Math.floor(Math.random() * 5 + 1),
};

const strtGameBtn = document.querySelector("#strtGame");
const playBtn = document.querySelector("#play");
const playAgainButton = document.querySelector("#playAgain");
const stopPlayingButton = document.querySelector("#stopPlaying");
const cupNrInput = document.querySelector("#cupNr");


strtGameBtn.addEventListener("click", () => {
  startGame(values);
});

cupNrInput.addEventListener("change", () => {
  controlCupNrInput();
});

playBtn.addEventListener("click", () => {
  playGame(values);
});

playAgainButton.addEventListener("click", () => {
  startGame(values);
});

stopPlayingButton.addEventListener("click", () => {
  stopPlaying();
});
