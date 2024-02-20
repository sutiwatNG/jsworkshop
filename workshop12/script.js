const count = 10
const apikey = 'EyFxFeMAtpu6Yzy2i348P6fQpDoJDFYCo4zXjRa0X24'
const apiurl = `https://api.unsplash.com/photos/random?client_id=${apikey}&count=${count}`

const imageContainer = document.getElementById('img-container')
let photoArray=[]

async function getPhoto() {
    try{
        const response =  await fetch(apiurl)
        photoArray=await response.json()
        displayImage()
    }catch(err){
        console.log(err)
    }
}
function displayImage() {
    photoArray.forEach((photo)=>{
        const Item = document.createElement('a')
        Item.setAttribute('href',photo.links.html)
        Item.setAttribute('target','_blank')

        const img = document.createElement('img')
        img.setAttribute('src',photo.urls.regular)
        img.setAttribute('title',photo.alt_description)
        img.setAttribute('alt',photo.alt_description)

        Item.appendChild(img)
        imageContainer.appendChild(Item)
    })
}
getPhoto()

window.addEventListener('scroll',()=>{
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight-100){
        // ดึงภาพมาแสดงผล
        // alert("ดึงภาพมาแสดงผล");
        getPhotos();
    }
});
