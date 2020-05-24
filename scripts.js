const secondsText = document.querySelector('#seconds');
const minutesText = document.querySelector('#minutes');
const playButton = document.querySelector('#playIco');
const resetButton = document.querySelector('#replayIco');
const timerTitle = document.querySelector('#timer-title');
const timer = document.querySelector('#time p');
const sessionIconDown = document.querySelector('#ico-down-left');
const sessionIconUp = document.querySelector('#ico-up-left');
const breakIconDown = document.querySelector('#ico-down-right');
const breakIconUp = document.querySelector('#ico-up-right');

const pausIco = document.querySelector('#pauseIco');
const stopIco = document.querySelector('#stopIco');

let sessionIconNum = document.querySelector('#sessionNum');
let breakNum = document.querySelector('#breakNum');
let playing = false;
let paused = false;
let onBreak = false;

let minutes = 0;
let seconds = 0;

let sessionNumVar = 25;
let breakNumVar = 5;

let origMinutues = sessionNumVar;
let origSeconds = 0;
let tempBreakNumVar = breakNumVar;

sessionIconNum.textContent = sessionNumVar;
breakNum.textContent = breakNumVar;
minutesText.textContent = (origMinutues > 9) ? origMinutues : '0' + origMinutues;
secondsText.textContent = (origSeconds > 9) ? origSeconds : '0' + origSeconds;


sessionIconUp.addEventListener("click", () => {
    if(!paused && !playing) {
        sessionNum.textContent = ++origMinutues;
        minutesText.textContent = origMinutues;
    }
});

sessionIconDown.addEventListener("click", () => {
    if(!paused && !playing) {
        sessionNum.textContent = --origMinutues;
        minutesText.textContent = origMinutues;
    }
});

breakIconUp.addEventListener("click", () => {
    if(!paused && !playing) {
        breakNum.textContent = ++tempBreakNumVar;
    }
});

breakIconDown.addEventListener("click", () => {
    if(!paused && !playing) {
        breakNum.textContent = --tempBreakNumVar;
    }
});

function incrementTimer() {
    if (seconds > 0) {
        seconds--;
        secondsText.textContent = (seconds > 9) ? seconds : '0' + seconds;
    } else {
        if (minutes == 0) {
            if(onBreak) {
                timerTitle.textContent = 'Session';
                onBreak = false;
                minutes = origMinutues;
                seconds = origSeconds;
                minutesText.textContent = (minutes > 9) ? minutes : '0' + minutes;
                secondsText.textContent = (seconds > 9) ? seconds : '0' + seconds;
                timer.style.color = 'white';
            } else {
                timerTitle.textContent = 'Break';
                onBreak = true;
                minutes = tempBreakNumVar;
                seconds = 0;
                minutesText.textContent = (minutes > 9) ? minutes : '0' + minutes;
                secondsText.textContent = (seconds > 9) ? seconds : '0' + seconds;
                timer.style.color = 'green';
            }
        } else {
            minutes--;
            minutesText.textContent = (minutes > 9) ? minutes : '0' + minutes;
            seconds = 59;
            secondsText.textContent = seconds;
        }
    }
}

playButton.addEventListener('click', () => {
    playing = true;
    paused = false;
    minutes = parseInt(minutesText.textContent);
    seconds = parseInt(secondsText.textContent);
    window.increment = setInterval(function() {
        incrementTimer();
    }, 1000);
    stopIco.addEventListener('click', () => {
        clearInterval(increment);
        minutesText.textContent = (origMinutues > 9) ? origMinutues : '0' + origMinutues;
        secondsText.textContent = (origSeconds > 9) ? origSeconds : '0' + origSeconds;
        minutes = origMinutues;
        seconds = origSeconds;
        paused = false;
        playing = false;
    });
    pauseIco.addEventListener('click', () => {
        clearInterval(increment);
        paused = true;
    })
});

resetButton.addEventListener('click', () => {
    clearInterval(increment);
    origMinutues = sessionNumVar;
    origSeconds = 0;
    tempBreakNumVar = breakNumVar;
    sessionNum.textContent = sessionNumVar;
    breakNum.textContent = breakNumVar;
    paused = false;
    playing = false;
    if(onBreak) {
        timerTitle.textContent = 'Session';
        onBreak = false;
        minutes = origMinutues;
        seconds = origSeconds;
    }
    minutesText.textContent = (origMinutues > 9) ? origMinutues : '0' + origMinutues;
    secondsText.textContent = (origSeconds > 9) ? origSeconds : '0' + origSeconds;
});