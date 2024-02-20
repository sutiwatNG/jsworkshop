const SpeechRecognize = window.SpeechRecognition || window.webkitSpeechRecognition

const recognize = new SpeechRecognize()
const btn = document.querySelector('.control')
//การบันทึกเสัยง
function recordVoice() {
    const isRecord=btn.classList.contains('record')

    if (isRecord) {
        recognize.start()
        btn.classList.remove('record')
        btn.classList.add('pause')
        btn.innerText='Pause'
    } else {
        recognize.stop()
        btn.classList.remove('pause')
        btn.classList.add('record')
        btn.innerText='Record'
    }
}
//setเสียงเป็นข้อความ
function setVoicetoText(e) {
    let message = document.querySelector('.message')
   message.innerText+=e.results[0][0].transcript
}
//บันทึกเสียงต่อจากก่อนหน้านี้
function continueRecord() {
    const isPause = btn.classList.contains('pause')
    if (isPause) {
        recognize.start
    }
}
//ตั้งค่าเสียง
function setUpVoice() {
    recognize.lang="th-TH"
    btn.addEventListener('click',recordVoice)
    recognize.addEventListener('result',setVoicetoText)
    recognize.addEventListener('end',continueRecord)
}
setUpVoice()

