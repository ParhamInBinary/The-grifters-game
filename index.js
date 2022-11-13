const strtGameBtn = document.querySelector("#strtGame");

const startPage = document.querySelector("#start");
const mainPage = document.querySelector("#main");
const winLosePage = document.querySelector("#winLose");


const playBtn = document.querySelector("#play")
const cupNrInput = document.querySelector("#cupNr");
const betInput = document.querySelector("#betInput");
const outPut = document.querySelector("#outPut")
const winLossOutPut = document.querySelector("#winLossOutPut");

const redBall1 = Math.floor(Math.random() * 5) +1;
const redBall2 = Math.floor(Math.random() * 5) +1;

let balance = 50;
const balanceTotal1 = document.querySelector("#balanceTotal");
const balanceTotal2 = document.querySelector("#newBalanceTotal");
const winAmountOutPut = document.querySelector("#winAmount");
const loseAmountOutPut = document.querySelector("#loseAmount");



strtGameBtn.addEventListener("click", function (){
    startPage = document.querySelector("#start").style.display = ("none");
    mainPage = document.querySelector("#main").style.display = ("block");
    outPut.innerText = (`The red ball is placed under cup ${redBall1}. Keep your eyes on the right cup... *Dealer shuffles the cups* 

    Go ahead and take your pick!`);

    balanceTotal1 = document.querySelector("#balanceTotal").innerText = (`Balance: $${balance}`)
});


cupNrInput.addEventListener("change", function () {
    if ( cupNrInput.value > 5) {
        cupNrInput.value = 5
    };

    if ( cupNrInput.value < 1) {
        cupNrInput.value = 1
    };

});


playBtn.addEventListener("click", function (){

    if ( betInput.value > balance || betInput.value < 1) {
        return
    }
    else {
        startPage = document.querySelector("#start").style.display = ("none");
        mainPage = document.querySelector("#main").style.display = ("none");
        winLosePage = document.querySelector("#winLose").style.display = ("block");

        winLossOutPut.innerText = `The ball is under cup ${redBall2}.
    
        Your guess was ${cupNrInput.value}`

        if ( redBall2 === cupNrInput) {
            balance = balance + +betInput.value
            balanceTotal2 = document.querySelector("#newBalanceTotal").innerText = (`Balance: $${balance}`);
            winAmountOutPut.innerText = `Congratulations! +$${betInput.value}`
        }
        else {
            balance = balance - +betInput.value
            balanceTotal2 = document.querySelector("#newBalanceTotal").innerText = (`Balance: $${balance}`);
            loseAmountOutPut.innerText = `Better luck next time! -$${betInput.value}` 
        }
    }
});

