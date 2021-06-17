// const daysElement = document.getElementById('days');
// const hoursElement = document.getElementById('hours');
// const minutesElement = document.getElementById('minutes');
// const secondElement = document.getElementById('second');


const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondElement = document.getElementById('second');

// console.log(day)

const newYear = '22 Mar 2021';

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    var seconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(seconds / 86400);
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor(seconds / 60) % 60;
    seconds = Math.floor(seconds % 60);


    // console.log(days, hours, minutes, seconds);

    daysElement.innerHTML = (days);
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondElement.innerHTML = formatTime(seconds);
}


function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
// initial call
countdown();

setInterval(countdown, 1000);
