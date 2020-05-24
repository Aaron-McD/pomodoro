const secondsText = document.querySelector('#seconds');
const minutesText = document.querySelector('#minutes');
const playButton = document.querySelector('#playIco');
const resetButton = document.querySelector('#replayIco');
let origMinutues = 25;
let origSeconds = 0;
let minutes = 0;
let seconds = 0;

function incrementTimer() {
    if(seconds > 0) {
        seconds--;
        secondsText.textContent = (seconds > 9) ? seconds : '0' + seconds;
    } else {
        if(minutes == 0){
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
    minutesText.textContent = (origMinutues > 9) ? origMinutues : '0' + origMinutues;
    secondsText.textContent = (origSeconds > 9) ? origSeconds : '0' + origSeconds;
    minutes = origMinutues;
    seconds = origSeconds;
    let increment = setInterval(function(){
        incrementTimer();
    }, 1000);
    resetButton.addEventListener('click', () => {
        clearInterval(increment);
        minutesText.textContent = (origMinutues > 9) ? origMinutues : '0' + origMinutues;
        secondsText.textContent = (origSeconds > 9) ? origSeconds : '0' + origSeconds;
        minutes = origMinutues;
        seconds = origSeconds;
    });  
}); 