var time = 0;
var timer = setInterval(function () {
    time += 1;
    console.log(time + 'seconds have passed')
    if (time > 10) {
        clearInterval(timer);
    }
}, 2000);