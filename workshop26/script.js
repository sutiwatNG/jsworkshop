//ประกาศตัวแปร
const panel = document.getElementById('panel')
const send = document.getElementById('send')
const ratingContainer = document.querySelector('.ratings-container')
const ratings = document.querySelectorAll('.rating')
//เมื่อทำการคลิ๊กความพึงพอใจ
ratingContainer.addEventListener('click',(e)=>{
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selected = e.target.nextElementSibling.innerHTML
    }
})

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
         ratings[i].classList.remove('active')
    }
}

send.addEventListener('click',()=>{
    panel.innerHTML =`
    <strong>ขอบคุณที่ใช้บริการ</strong>
    <br>
    <strong>ผลการประเมินของคุณคือ ${selected} </strong>
    `
})