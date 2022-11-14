const mainPage = document.querySelector("#main");
const winLosePage = document.querySelector("#winLose");
const betInput = document.querySelector("#betInput");
const winLossOutPut = document.querySelector("#winLossOutPut");
const cupNrInput = document.querySelector("#cupNr");
const balanceTotal2 = document.querySelector("#newBalanceTotal");
const resultOutcome = document.querySelector("#resultOutcome");


/**
 * Function to display the correct layout, validate input for bet amount and produces results.
 * @param {{balance: number, redBall: number}}values Object containing values for redBall and balance
 * @returns {void}
 */
export function playGame(values) {
  if (betInput.value > values.balance || betInput.value < 1 || Number.isNaN(+betInput.value)) {
    return;
  }

  mainPage.style.display = "none";
  winLosePage.style.display = "block";

  winLossOutPut.innerText = `The ball is under cup ${values.redBall}.
        
        Your guess was ${cupNrInput.value}`;

  if (values.redBall === +cupNrInput.value) {
    values.balance = values.balance + +betInput.value;
    balanceTotal2.innerText = `Balance: $${values.balance}`;
    resultOutcome.innerText = `Congratulations! +$${betInput.value}`;
  } else {
    values.balance = values.balance - +betInput.value;
    balanceTotal2.innerText = `Balance: $${values.balance}`;
    resultOutcome.innerText = `Better luck next time! -$${betInput.value}`;
  }
}
