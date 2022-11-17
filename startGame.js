const startPage = document.querySelector("#start");
const mainPage = document.querySelector("#main");
const outPut = document.querySelector("#outPut");
const balanceTotal = document.querySelector("#balanceTotal");
const winLosePage = document.querySelector("#winLose");

/**
 * Function to display the correct layout, randomize the cup number of which redBall represents and present current balance.
 * @param {{balance: number, redBall: number, redBall_2: number}}values Object containing values for redBall, redBall_2 and balance.
 * @return {void}
 */
export function startGame(values) {
  if ( values.balance < 1 ) {
    return
  }
  
  values.redBall = Math.floor(Math.random() * 5 + 1);
  startPage.style.display = "none";
  winLosePage.style.display = "none";
  mainPage.style.display = "block";
  outPut.innerText = `The red ball is placed under cup ${values.redBall}. Keep your eyes on the right cup... *Dealer shuffles the cups* 

    Go ahead and take your pick!`;

  balanceTotal.innerText = `Balance: $${values.balance}`;
}
