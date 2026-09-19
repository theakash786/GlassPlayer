let isPlaying = false;
const audio = document.getElementById('audioPlayer');
const uploadInput = document.getElementById('audioUpload');
const titleDisplay = document.getElementById('titleDisplay');
const record = document.getElementById('record');
const playBtn = document.getElementById('playBtn');

uploadInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const objectURL = URL.createObjectURL(file);
        audio.src = objectURL;
        titleDisplay.innerText = file.name.replace(/\.[^/.]+$/, "");
        if (isPlaying) {
            togglePlay(); 
        }
    }
});

function togglePlay() {
    if (!audio.src || audio.src === window.location.href) {
        alert("Please load a song first!");
        return;
    }
    isPlaying = !isPlaying;
    if (isPlaying) {
        record.classList.add('spin');
        playBtn.innerHTML = '&#10074;&#10074;'; 
        audio.play();  
    } else {
        record.classList.remove('spin');
        playBtn.innerHTML = '&#9658;'; 
        audio.pause(); 
    }
}
