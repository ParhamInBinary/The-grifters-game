const cupNrInput = document.querySelector("#cupNr");
/**
 * Function to validate the guess of cup number.
 * @return {void}
 */
export function controlCupNrInput() {
    if (cupNrInput.value > 5) {
      cupNrInput.value = 5;
    }
  
    if (cupNrInput.value < 1) {
      cupNrInput.value = 1;
    }
  }