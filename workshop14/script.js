const videoEl = document.getElementById('video')
const requestionEl = document.getElementById('requestion')
const sharebtnEl = document.getElementById('sharebtn')

requestionEl.addEventListener('click',()=>{
    selectMediaStream()
})

sharebtnEl.addEventListener('click',async ()=>{
    sharebtnEl.disabled=true
    await videoEl.requestPictureInPicture()
    sharebtnEl.disabled=false
})



//ส่งคำขอเข้าอุปกรณ์
async function selectMediaStream() {
    try{
        const mediaStream=await navigator.mediaDevices.getDisplayMedia()
        videoEl.srcObject = mediaStream
        videoEl.onloadedmetadata=()=>{
            videoEl.play()
        }
    } catch(error){
        console.log(error)
    }
    
}