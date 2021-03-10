`use strict`

$(function() {
    let interval;

    // the stop watch starts off and if you click the start/stop button it turns it starts or stops
    let isRunning = false;
    let $startStop = $(`#startStop`);
    $startStop.on(`click`, function() {
        if (isRunning == false) {
            isRunning = true;
            startWatch();
            $startStop.html(`STOP`)
            $startStop.css("background-color", "green")
        } else {
            isRunning = false;
            stopWatch();
            $startStop.html(`START`)
            $startStop.css("background-color", "red")

        }
    })

    // variables to keep track of the time
    let ms = 0;
    let sec = 0;
    let min = 0;

    // function to start the stop watch that increases the time every 100ms
    function startWatch() {
        interval = setInterval(function() {
            ms++;

            if (ms < 10) {
                $(`#ms`).html(`0${ms}`);
            }
            if (ms < 100 && ms >= 10) {
                $(`#ms`).html(`${ms}`);
            }
            if (ms == 100) {
                ms = 0;
                sec++;
            }

            if (sec < 10) {
                $(`#sec`).html(`0${sec}`)
            }
            if (sec < 60 && sec >= 10) {
                $(`#sec`).html(`${sec}`);
            }
            if (sec == 60) {
                sec = 0;
                min++;
            }

            if (min < 10) {
                $(`#min`).html(`0${min}`);
            }
            if (min >= 10) {
                $(`#min`).html(`${min}`);
            }
        }, 10);
    }

    //function to stop the watch
    function stopWatch() {
        clearInterval(interval);
    }

    //lap button onclick function
    let $lap = $(`#lap`);
    $lap.on(`click`, function() {
        if (ms < 10) {
            $(`#lapMs`).html(`0${ms}`);
        }
        if (ms >= 10) {
            $(`#lapMs`).html(`${ms}`);
        }

        if (sec < 10) {
            $(`#lapSec`).html(`0${sec}`)
        }
        if (sec >= 10) {
            $(`#lapSec`).html(`${sec}`);
        }

        if (min < 10) {
            $(`#lapMin`).html(`0${min}`);
        }
        if (min >= 10) {
            $(`#lapMin`).html(`${min}`);
        }
    })

})