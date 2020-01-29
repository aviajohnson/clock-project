function setTime() {
    var output = document.getElementById('output')
    var today = new Date();
    var hours = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    if (hours > 12) {
        hours -= 12;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    var time = hours + ":" + min + ":" + sec;
    console.log(time);
    output.innerText = time;
    requestAnimationFrame(setTime)  
}
setTime();
setInterval();