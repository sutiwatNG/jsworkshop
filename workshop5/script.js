const wordEl = document.getElementById('word')
const textEl = document.getElementById('text')
const scoreEl = document.getElementById('score')
const timeEl = document.getElementById('time')
const gameoverEl = document.getElementById('gameover-container')

const btnLevelEl = document.getElementById('level-btn')
const settings = document.getElementById('settings')
const levelFormEl = document.getElementById('level-form')
const levelEl = document.getElementById('level')

const words =["หมู","ไก่","มหาเทพ","จระเข้"]

let randomText
let score=0
let time=20 //easy => 20วิ medium => 15วิ hard => 10วิ

let level='medium'
const saveMode = localStorage.getItem('mode') !==null ? localStorage.getItem('mode') : 'medium'

const timeInterval = setInterval(updateTime,1000)

function getRandomword() {
    return words[Math.floor(Math.random()*words.length)]
}

function displaywordToUi() {
    randomText=getRandomword()
    wordEl.innerHTML = randomText
    timeEl.innerHTML = time

}
textEl.addEventListener('input',(e)=>{
    const inputText = e.target.value

    if(inputText===randomText){
        displaywordToUi()
        if (saveMode == 'easy') {
            time+=5
        }else if (saveMode =='medium') {
            time+=3
        }else{
            time+=2
        }
        updateScore()
        e.target.value=''
    }
})

function updateScore() {
    score += 10
    scoreEl.innerHTML = score
}

function updateTime() {
    time--
    timeEl.innerHTML=time
    if (time === 0) {
        clearInterval(timeInterval)
        gameOver()
    }
}
function gameOver() {
    gameoverEl.innerHTML=`
        <h1>จบการทำงาน</h1>
        <p>คะแนนของคุณคือ ${score} แต้ม</p>
        <button onclick="location.reload()">เล่นอีกครั้ง</button>`
    gameoverEl.style.display='flex'
}
btnLevelEl.addEventListener('click',()=>{
    settings.classList.toggle('hide')
})
levelEl.addEventListener('change',(e)=>{
    level=e.target.value
    localStorage.setItem("mode",level)

})

function startGame() {
    levelEl.value = saveMode
    if (saveMode == 'easy') {
        time=20
    }else if (saveMode =='medium') {
        time=15
    }else{
        time=10
    }
    displaywordToUi()
}

startGame()
textEl.focus()

