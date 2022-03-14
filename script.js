tens = 00
seconds = 00
var appendTens = document.getElementById('tens')
var appendSecond = document.getElementById('seconds')
var Interval

function start() {
    inicio = setInterval(time, 10)
}

function stop() {
    clearInterval(inicio)
}

function restart() {
    clearInterval(inicio)
    appendSecond.innerHTML = '00'
    appendTens.innerHTML = '00'
    tens = 00
    seconds = 00
}

function time() {
    tens++
    appendTens.innerHTML = tens
    if (tens == 100) {
        seconds++
        appendSecond.innerHTML = seconds
        tens = 00
    }
}

