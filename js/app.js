var button = document.getElementById('hamburgerButton');
var video = document.getElementById("videoWrap"); 
var playPauseButton = document.getElementById('playPauseButton');

button.addEventListener('click',  toggleClass = () => {
    button.classList.toggle('active');
});

playPauseButton.addEventListener('click',  playPause = () => { 
    if (video.paused) {
        video.play();
        playPauseButton.classList.add('active'); 
    } else {
        video.pause();
        playPauseButton.classList.remove('active'); 
    }
}); 

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();   
});