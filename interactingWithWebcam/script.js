let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');
let video = document.querySelector('#video');

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(videoStream => {
        video.srcObject = videoStream;
        video.play();
    });
}

document.getElementById('snap').addEventListener('click', () => {
    context.drawImage(video, 0,0,640, 480);
})