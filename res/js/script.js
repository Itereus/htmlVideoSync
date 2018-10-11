var vid = document.getElementById("film");

// To be implemented
var timeOffset = 0;

// Time here is the duration of the film, in milliseconds
var videoTotalTime = 36.047;
var btnPlay = document.getElementById("play");
var time = document.getElementById("vidTime");
var sysTime = document.getElementById("sysTime");
var testTime = document.getElementById("testTime");
var timerId;
var d = new Date();
var n;


function playDelayed(filmKilde) {

    // BELOW: Use milliseconds only?
    // Get the Unix timestamp in milliseconds, convert to seconds. Divide by
    // length of video, in seconds with decimal.
    n = (d.getTime() / 1000) / videoTotalTime;
    // Remove everything before decimal. We're only interested in the part before a whole number
    n = n - Math.floor(n);
    // Set the starttime of the video to the time based on system time.
    timeOffset = n * videoTotalTime;
    filmKilde.currentTime = timeOffset;
    filmKilde.play();

    // Both lines below should be removed in final
    updateTimeText(filmKilde);
    testPlayDelayed(filmKilde);
}

// Code below is for debugging purposes
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