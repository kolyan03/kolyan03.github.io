// JavaScript Document

var milliSecondsCount = 0;
var secondsCount = 0;
var minutesCount = 0;
var hoursCount = 0;
var pauseTime;
var i;
var toClear = document.getElementById('splitted');
var writeHere = document.getElementById('control');
var timeWrite = document.createElement('div');
timeWrite.classList.add('moment-time');
writeHere.appendChild(timeWrite);

function countOfTime() {

    milliSecondsCount += 9;

    document.getElementById('ml-second').innerHTML = milliSecondsCount;
    if (milliSecondsCount < 10) {
        document.getElementById('ml-second').innerHTML = '00' + milliSecondsCount;
    }
    if (milliSecondsCount < 100) {
        document.getElementById('ml-second').innerHTML = '0' + milliSecondsCount;
    }
    if (milliSecondsCount > 999) {
        milliSecondsCount = 000;
        secondsCount++;
    }

    document.getElementById('second').innerHTML = secondsCount;
    if (secondsCount < 10) {
        document.getElementById('second').innerHTML = '0' + secondsCount;
    }
    if (secondsCount > 59) {
        secondsCount = 00;
        minutesCount++;

    }

    document.getElementById('minute').innerHTML = minutesCount;
    if (minutesCount < 10) {
        document.getElementById('minute').innerHTML = '0' + minutesCount;
    }
    if (minutesCount > 59) {
        minutesCount = 00;
        hoursCount++;

    }

    document.getElementById('hour').innerHTML = hoursCount;
    if (hoursCount < 10) {
        document.getElementById('hour').innerHTML = '0' + hoursCount;
    }
    if (hoursCount > 23) {
        hoursCount = 00;
    }
};

function writeTime () {
    someArray = [hoursCount, minutesCount, secondsCount, milliSecondsCount];
    timeArray = someArray.join(' : ');
};

function startCount() {
    beginCountOfTime.setAttribute('class', 'hide');
    pauseCountOfTime.setAttribute('class', 'btn btn-lg btn-default');
    i = setInterval(countOfTime, 20);

};

function stopCount() {
    clearInterval(i);
    milliSecondsCount = 0;
    document.getElementById('ml-second').innerHTML = '000';
    secondsCount = 0;
    document.getElementById('second').innerHTML = '00';
    minutesCount = 0;
    document.getElementById('minute').innerHTML = '00';
    hoursCount = 0;
    document.getElementById('hour').innerHTML = '00';
    beginCountOfTime.setAttribute('class', 'btn btn-lg btn-default');
    pauseCountOfTime.setAttribute('class', 'hide');
    while (timeWrite.lastChild) {
        timeWrite.removeChild(timeWrite.lastChild);
    };
    
};

function pauseCount() {
    clearInterval(i);
    pauseCountOfTime.setAttribute('class', 'hide');
    beginCountOfTime.setAttribute('class', 'btn btn-lg btn-default');
    writeTime();
    timeStop=document.createElement('p');
    timeStop.innerHTML = 'Stop ' + timeArray;
    timeWrite.appendChild(timeStop);
};

function splitCount() {
    writeTime();
    timeSplit = document.createElement('p');
    timeSplit.innerHTML = 'Split ' + timeArray;
    timeWrite.appendChild(timeSplit);
};

window.onload = controlDigitalWatch();

function controlDigitalWatch() {
    beginCountOfTime = document.getElementById('btn-start');
    beginCountOfTime.onclick = startCount;
    var stopCountOfTime = document.getElementById('btn-stop');
    stopCountOfTime.onclick = stopCount;
    pauseCountOfTime = document.getElementById('btn-pause');
    pauseCountOfTime.onclick = pauseCount;
    splitCountOfTime = document.getElementById('btn-split');
    splitCountOfTime.onclick = splitCount;
};

