import { startGame } from "./startGame.js";
import { playGame } from "./playGame.js";
import { controlCupNrInput } from "./controlCupNrInput.js";
import { stopPlaying } from "./stopPlaying.js";

const strtGameBtn = document.querySelector("#strtGame");
const playBtn = document.querySelector("#play");
const playAgainButton = document.querySelector("#playAgain");
const stopPlayingButton = document.querySelector("#stopPlaying");
const cupNrInput = document.querySelector("#cupNr");

/**
 * Compiled addEventListeners calling on a multitude of functions thoughtout the different JS-files.
 * @param {{balance: number, redBall: number, redBall_2: number}}values Object containing values for redBall, redBall_2 and balance.
 */
const values = {
  balance: 50,
  redBall: Math.floor(Math.random() * 5 + 1),
  redBall_2: Math.floor(Math.random() * 5 + 1)
};

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
