let interval;
let isRunning = false;
let remainingTime;

document.getElementById('startButton').addEventListener('click', function() {
    let timeInput = document.getElementById('timeInput').value;
    let timerDisplay = document.getElementById('timerDisplay');
    if (!isRunning) {
        if (interval) {
            clearInterval(interval);
        }
        let time = parseInt(timeInput);
        if (!remainingTime) {
            remainingTime = time;
        }
        if (isNaN(remainingTime) || remainingTime <= 0) {
            alert('Пожалуйста, введите положительное число.');
            return;
        }

        updateTimerDisplay(remainingTime);
        interval = setInterval(() => {
            if (remainingTime <= 0) {
                clearInterval(interval);
                timerDisplay.textContent = 'Время вышло!';
                isRunning = false;
                remainingTime = 0;
                return;
            }
            remainingTime--;
            updateTimerDisplay(remainingTime);
        }, 1000);

        isRunning = true;
        this.textContent = 'Пауза';
    } else {
        clearInterval(interval);
        isRunning = false;
        this.textContent = 'Продолжить';
    }
});
function updateTimerDisplay(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    document.getElementById('timerDisplay').textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
function pad(num) {
    return num < 10 ? '0' + num : num;
}
