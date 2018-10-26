// To be implemented properly
var timeOffset = 0;
// Time here is the duration of the film
var videoTotalTime = 967.5093;
var vid = document.getElementById("film");
var time = document.getElementById("vidTime");
var sysTime = document.getElementById("sysTime");
var testTime = document.getElementById("testTime");
var timerId;
var updateTime;
var startTime;
var unixDate;
var unixTime;

vid.onclick = function() {playDelayed(vid)};
window.onload = function() {playDelayed(vid)};

function playDelayed(filmKilde) {
    filmKilde.currentTime = getOffSetTime();
    filmKilde.play();

    // Syncronize every x seconds
    clearInterval(updateTime);
    updateTime = setInterval(function() {
    filmKilde.currentTime = getOffSetTime();
    }, 60000)

    // Used for debugging
    // Comment out when done
    // updateTimeText(filmKilde);
}

function getOffSetTime() {
    // BELOW: Use milliseconds only?
    // Get the Unix timestamp in milliseconds, convert to seconds. Divide by
    // length of video, in seconds with decimal
    unixDate = new Date();
    unixTime = (unixDate.getTime() / 1000) / videoTotalTime;
    // Remove everything before decimal. We're only interested in the part before a whole number
    unixTime = unixTime - Math.floor(unixTime);
    // Set the starttime of the video to the time based on system time.
    startTime = unixTime * videoTotalTime;
    return startTime;
}

// Function is for debugging
/*
function updateTimeText(filmKilde) {
    clearInterval(timerId);
    timerId = setInterval(function() {
        time.innerHTML = filmKilde.currentTime;
        unixDate = new Date();
        sysTime.innerHTML = unixDate.getTime();

        unixTime = (unixDate.getTime() / 1000) / videoTotalTime;
        unixTime = unixTime - Math.floor(unixTime);
        unixTime = unixTime * videoTotalTime;
        testTime.innerHTML = unixTime;
    }, 1000)
}
*/