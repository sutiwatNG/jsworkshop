const img = document.querySelector("img")
const input = document.querySelector("input")

input.addEventListener('change',()=>{
    img.src=URL.createObjectURL(input.files[0])
})