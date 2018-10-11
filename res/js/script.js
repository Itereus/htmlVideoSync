var vid = document.getElementById("film");
var timeOffset = 0;
var videoTotalTime = 967.5093;
var btnPlay = document.getElementById("play");
var time = document.getElementById("vidTime");
var sysTime = document.getElementById("sysTime");
var testTime = document.getElementById("testTime");
var timerId;
var d = new Date();
var n;

function playDelayed(filmKilde) {
    filmKilde.currentTime = timeOffset;
    filmKilde.play();
    //time.innerHTML = filmKilde.currentTime;
    updateTimeText(filmKilde);
    testPlayDelayed(filmKilde);
}

function updateTimeText(filmKilde) {
    clearInterval(timerId);
    timerId = setInterval(function() {
        time.innerHTML = filmKilde.currentTime;
        d = new Date();
        sysTime.innerHTML = d.getTime();

        n = (d.getTime() / 1000) / videoTotalTime;
    n = n - Math.floor(n);
    n = n * videoTotalTime;
    testTime.innerHTML = n;
    }, 1000)
}

function testPlayDelayed(filmKilde) {
    d = new Date();
    n = (d.getTime() / 1000) / videoTotalTime;
    n = n - Math.floor(n);
    n = n * timeOffset;
    testTime.innerHTML = n;
}

btnPlay.onclick = function() {playDelayed(vid)};