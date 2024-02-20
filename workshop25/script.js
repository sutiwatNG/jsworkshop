const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = "ยินดีต้อนรับเข้าสู่หน้าแรกของเว็บไซต์";
let speed = 300/speedEl.value

let charactorId = 1

writetext()

function writetext() {
    textEl.innerText = text.slice(0,charactorId)
    charactorId++
    if (charactorId>text.length) {
        charactorId=1
    }
    setTimeout(writetext,speed)
}

speedEl.addEventListener('input',(e)=>{
    speed = 300/e.target.value
})