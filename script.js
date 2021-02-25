$(function() {

    $('#start').click(startWatch)
    $('#reset').click(resetWatch)
        // This variable stores the time
    let interval;

    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;

    // starts the stop Watch
    function startWatch() {
        interval = setInterval(function() {
            milliseconds++

            if (milliseconds > 10) {
                seconds++;
            } else if (seconds > 60) {
                minutes++;
            }
        }, 10)
    }


    // start a lap

    function lap() {

    }

    // Stops the stop watch

    function resetWatch() {
        clearInterval(interval)
    }

    $('#time-amount').html(`${minutes}:${seconds}:${milliseconds}`)
});