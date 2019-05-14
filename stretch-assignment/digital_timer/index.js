var counterSecondOnes = 0;
var counterSecondTens = 0;
var counterMsHundreds = 0;
var counterMsTens = 0;
var timeLeft = 10;

const secondOnesTimer = document.querySelector('#secondOnes') 
const secondTensTimer = document.querySelector('#secondTens');
const MsHundredsTimer = document.querySelector('#msHundreds');
const msTensTimer = document.querySelector('#msTens');

function setup() {

function timeItSecondOnes() {
    counterSecondOnes++;
    secondOnesTimer.textContent = convertSeconds(counterSecondOnes - timeLeft);
    if(counterSecondOnes === timeLeft) {
        clearInterval(secondInterval)
    }
}

function convertSeconds(s) {
    var min = Math.floor(s/60);
    var sec = s % 60;
    return `${min} : ${sec}`;
}
 
// function timeItSecondTens() {
//     counterSecondTens++;
//     secondTensTimer.textContent = counterSecondTens;

// }

// function timeItMsHundreds() {
//     counterMsHundreds++;
//     MsHundredsTimer.textContent = counterMsHundreds;

// }

// function timeItMsTens() {
//     counterMsTens++;
//     msTensTimer.textContent = counterMsTens;
// }

var secondInterval = setInterval(timeItSecondOnes, 1000);

// setInterval(timeItSecondTens, 10000);

// setInterval(timeItMsHundreds, 100);

// setInterval(timeItMsTens, 10);



}

setup();

