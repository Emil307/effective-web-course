const start = document.getElementById('start');
const stoper = document.getElementById('stop');
const reset = document.getElementById('reset');
const minutes_input = document.getElementById('minutes');
const seconds_input = document.getElementById('seconds');
const audio = document.getElementById('audio');

allTime = localStorage.getItem('allTime');
minutes_input.value = localStorage.getItem('minutesLeft');
seconds_input.value = localStorage.getItem('secondsLeft');

function clickStart() {
    minutes_value = minutes_input.value;
    seconds_value = seconds_input.value;
    allTime = minutes_value * 60000 + seconds_value * 1000;
    localStorage.setItem('allTime', allTime);
    minutes_input.disabled = true;
    seconds_input.disabled = true;
    start.disabled = true;
    stoper.disabled = false;
    reset.disabled = false;
    let stoperActive = false;

    let diff = allTime;

    const intervalId = setInterval(function() {
        diff = diff - 1000;
        let minutesLeft = Math.floor(diff / 1000 / 60);
        let secondsLeft = Math.floor(diff / 1000) % 60;
        localStorage.setItem('minutesLeft', minutesLeft);
        localStorage.setItem('secondsLeft', secondsLeft);
        minutes_input.value = String(minutesLeft < 10 ? '0' + minutesLeft : minutesLeft);
        seconds_input.value = String(secondsLeft < 10 ? '0' + secondsLeft : secondsLeft);

        if (minutesLeft == 0 && secondsLeft == 0) {
            clearInterval(intervalId);
            minutes_input.value = 'введите количество минут';
            seconds_input.value = 'введите количество секунд';
        };
    }, 1000)

    const timerId = setTimeout(() => {
        minutes_input.disabled = false;
        seconds_input.disabled = false;
        document.body.setAttribute('style', 'background:red;')
        audio.play();
        clearTimeout(timerId)
    }, allTime)

    function clickStop() {
        clearInterval(intervalId);
        clearTimeout(timerId)
        stoperActive = true;
        start.disabled = false;
    }

    function clickReset() {
        clearTimeout(timerId)
        document.body.setAttribute('style', 'background:#fff;')
        minutes_input.value = '';
        seconds_input.value = '';
        minutes_value = 0;
        seconds_value = 0;
        allTime = 0;
        minutes_input.disabled = false;
        seconds_input.disabled = false;
        start.disabled = false;
        audio.autoplay = false;
        audio.pause();
    }

    stoper.onclick = clickStop;
    reset.onclick = clickReset;
}

start.onclick = clickStart;