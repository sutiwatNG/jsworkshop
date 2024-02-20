const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const second = document.getElementById('seconds')

const countdown = document.getElementById('countdown')

const currentYear = new Date().getFullYear() //ดึงปีปัจจุบัน
const newYearTime = new Date(`Febuary 11 ${currentYear+1} 00:00:00`)//นับเวลาไปอีก1ปีที่จะcountdown

function updateCountDown() {
    const currentTime = new Date()
    const diff = newYearTime-currentTime
    const d = Math.floor(diff/1000/60/60/24)
    const h = Math.floor(diff/1000/60/60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;
    days.innerHTML = d
    hours.innerHTML = h<10?'0'+h:h
    minutes.innerHTML = m<10?'0'+m:m
    second.innerHTML = s<10?'0'+s:s

}
setInterval(updateCountDown,1000)