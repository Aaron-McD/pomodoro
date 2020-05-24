const secondsText = document.querySelector('#seconds');
const minutesText = document.querySelector('#minutes');
const playButton = document.querySelector('#playIco');
const resetButton = document.querySelector('#replayIco');

const sessionIconDown = document.querySelector('#ico-down-left');
const sessionIconUp = document.querySelector('#ico-up-left');
const breakIconDown = document.querySelector('#ico-down-right');
const breakIconUp = document.querySelector('#ico-up-right');

const pausIco = document.querySelector('#pauseIco');
const stopIco = document.querySelector('#stopIco');

let sessionIconNum = document.querySelector('#sessionNum');
let breakNum = document.querySelector('#breakNum');


let minutes = 0;
let seconds = 0;

let sessionNumVar = 45;
let breakNumVar = 10;

let origMinutues = sessionNumVar;
let origSeconds = 0;

sessionIconNum.textContent = sessionNumVar;
breakNum.textContent = breakNumVar;
minutesText.textContent = sessionNumVar;
secondsText.textContent = (origSeconds > 9) ? origSeconds : '0' + origSeconds;


sessionIconUp.addEventListener("click", () => {

    sessionNum.textContent = ++origMinutues;
    minutesText.textContent = origMinutues;
})

sessionIconDown.addEventListener("click", () => {

    sessionNum.textContent = --origMinutues;
    minutesText.textContent = origMinutues;
})

breakIconUp.addEventListener("click", () => {
    breakNum.textContent = breakNumVar++;
})

breakIconDown.addEventListener("click", () => {
    breakNum.textContent = breakNumVar--;
})

function incrementTimer() {
    if (seconds > 0) {
        seconds--;
        secondsText.textContent = (seconds > 9) ? seconds : '0' + seconds;
    } else {
        if (minutes == 0) {
            return false;
        } else {
            minutes--;
            minutesText.textContent = (minutes > 9) ? minutes : '0' + minutes;
            seconds = 59;
            secondsText.textContent = seconds;
        }
    }
}

playButton.addEventListener('click', () => {
    /*minutesText.textContent = (origMinutues > 9) ? origMinutues : '0' + origMinutues;
    secondsText.textContent = (origSeconds > 9) ? origSeconds : '0' + origSeconds;*/
    minutes = parseInt(minutesText.textContent);
    seconds = parseInt(secondsText.textContent);
    let increment = setInterval(function() {
        incrementTimer();
    }, 1000);
    stopIco.addEventListener('click', () => {
        clearInterval(increment);
        minutesText.textContent = (origMinutues > 9) ? origMinutues : '0' + origMinutues;
        secondsText.textContent = (origSeconds > 9) ? origSeconds : '0' + origSeconds;
        minutes = origMinutues;
        seconds = origSeconds;
    });
    pauseIco.addEventListener('click', () => {
        clearInterval(increment);
    })

});