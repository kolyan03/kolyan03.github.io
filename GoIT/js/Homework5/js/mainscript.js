// JavaScript Document

//Собственно вычисление и интрепретация времени
function stopWatch(elem) {
    var mlsTime = 0;
    var ourTime = 0;
    var ourInterval;
    var offsetOfTime;
    var canSplit;



    function changeOfTime() {
        var momentTime = Date.now();
        var lostTime = momentTime - offsetOfTime;
        offsetOfTime = momentTime;
        return lostTime;
    };

    function countOfTime() {
        ourTime += changeOfTime();
        timeYouSee = viewOfTime(ourTime);
        var mainTime = document.getElementById('indicate');
        var additionalTime = document.getElementById('milliseconds');
        additionalTime.textContent = ' . ' + mLS;
        mainTime.textContent = timeYouSee;
    };

    function viewOfTime(timeWithoutMls) {
        var time = new Date(timeWithoutMls);
        var hours = time.getHours().toString();
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        mLS = time.getMilliseconds().toString();

        if (hours.length < 2) {
            hours = '0' + hours - 2;
        }
        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }
        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }

        if (mLS.length < 3) {
            mLS = '0' + mLS;
        }
        return hours + ' : ' + minutes + ' : ' + seconds + ' ';
    };


    this.workingNow = false;
    this.canSplit = false;

    this.start = function () {
        if (!this.workingNow) {
            ourInterval = setInterval(countOfTime, 10);
            offsetOfTime = Date.now();
            this.workingNow = true;
            this.canSplit = true;
        };
    };
    this.stop = function () {
        if (this.workingNow) {
            clearInterval(ourInterval);
            ourInterval = null;
            this.workingNow = false;
            this.canSplit = false;

        }
    };
    this.reset = function () {
        ourTime = 0;
        mLS = 0;
        clearInterval(ourInterval);
        document.getElementById('indicate').innerHTML = ' 00 : 00 : 00';
        document.getElementById('milliseconds').innerHTML = '.000';
        while (writeHere.lastChild) {
        writeHere.removeChild(writeHere.lastChild);
        }
        this.canSplit = false;
    };

    this.split = function () {
        if (this.canSplit) {
            var momentOfTime = timeYouSee + ' . ' + mLS;
            writeHere = document.getElementById('write-here');
            var splitTime = document.createElement('p');
            splitTime.setAttribute('class', 'splitted');
            splitTime.textContent = 'SPLIT: ' + momentOfTime;
            writeHere.appendChild(splitTime);
        } else {
            return
        } 

    };
};






























/*

function DigitalWatch() {
    var ourTime = 0;
    var ourInterval;
    var offsetOfTime;

    function updateTime() {
        ourTime += changeTime();
        var watchTime = timeYouSee(ourTime);
        //elem.textContent = watchTime;
        console.log(watchTime);
    }

    function changeTime() {
        var momentTime = Date.now();
        var lostTime = momentTime - offsetOfTime;
        offsetOfTime = momentTime;
        return lostTime;
    }

    function timeYouSee(timeWithMilliseconds) {
        var time = new Date(timeWithMilliseconds);
        var seeHours = time.getHours().toString();
        var seeMinutes = time.getMinutes.toString();
        var seeSeconds = time.getSeconds.toString();
        var seeMls = time.getMilliseconds.toString();

        if (seeHours.length < 2) {
            seeHours = '0' + seeHours;
        };
        if (seeMinutes.length < 2) {
            seeMinutes = '0' + seeMinutes;
        };
        if (seeSeconds.length < 2) {
            seeSeconds = '0' + seeSeconds;
        };
        while (seeMls.length < 3) {
            seeMls = '0' + seeMls;
        };

        return seeHours + ' : ' + seeMinutes + ' : ' + seeSeconds + ' . ' + seeMls;
        
    };

    this.workNow = false;

    this.start = function() {
        if (!this.workNow) {
            ourInterval = setInterval(updateTime, 10);
            offsetOfTime = Date.now();
            this.workNow = true;
        };
    };
    this.clear = function() {
        ourTime = 0;
    };
    this.pause = function() {
        if (this.workNow) {
            clearInterval(ourInterval);
            ourInterval = null;
            this.workNow = false;
        }
    };
};

*/