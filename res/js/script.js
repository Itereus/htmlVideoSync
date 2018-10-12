// To be implemented properly
var timeOffset = 0;
// Time here is the duration of the film, in milliseconds
var videoTotalTime = 967.5093;
var vid = document.getElementById("film");
var time = document.getElementById("vidTime");
var sysTime = document.getElementById("sysTime");
var testTime = document.getElementById("testTime");
var timerId;
var updateTime;
var d = new Date();
var n;

vid.onclick = function() {playDelayed(vid)};
window.onload = function() {playDelayed(vid)};

function playDelayed(filmKilde) {
    filmKilde.currentTime = getOffSetTime();
    filmKilde.play();

    // Syncronize every 5 seconds
    clearInterval(updateTime);
    updateTime = setInterval(function() {
    filmKilde.currentTime = getOffSetTime();
    }, 5000)

    // Used for debugging
    // Comment out when done
    updateTimeText(filmKilde);
}

function getOffSetTime() {
    // BELOW: Use milliseconds only?
    // Get the Unix timestamp in milliseconds, convert to seconds. Divide by
    // length of video, in seconds with decimal.
    n = (d.getTime() / 1000) / videoTotalTime;
    // Remove everything before decimal. We're only interested in the part before a whole number
    n = n - Math.floor(n);
    // Set the starttime of the video to the time based on system time.
    timeOffset = n * videoTotalTime;
    return timeOffset;
}

// Function is for debugging
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