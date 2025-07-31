let songs = [
    { title: "Aap Ke Aa Jane Se", artist: "Artist kishor kumar", src: "music1.mp3" },
    { title: "Ankhiyon Ke Jharokhon Se", artist: "Artist arjit", src: "music2.mp3" },
    { title: "Aasman Ko Chukar Dekha ", artist: "Artist xyz ", src: "music3.mp3" }
];
let current = 0;
let shuffle = false;
let audio = document.getElementById('audio');
let playBtn = document.getElementById('playBtn');
function loadSong(index) {
    audio.src = songs[index].src;
    document.getElementById('title').innerText = songs[index].title;
    document.getElementById('artist').innerText = songs[index].artist;
}
function playPause() {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = 'Pause';
    } else {
        audio.pause();
        playBtn.innerText = 'Play';
    }
}
function next() {
    if (shuffle) {
        current = Math.floor(Math.random() * songs.length);
    } else {
        current = (current + 1) % songs.length;
    }
    loadSong(current);
    audio.play();
    playBtn.innerText = 'Pause';
}
function prev() {
    current = (current - 1 + songs.length) % songs.length;
    loadSong(current);
    audio.play();
    playBtn.innerText = 'Pause';
}
function toggleShuffle() {
    shuffle = !shuffle;
    ('Shuffle is ' + (shuffle ? 'ON' : 'OFF'));
}
function seek() {
    let progress = document.getElementById('progress');
    audio.currentTime = (progress.value / 100) * audio.duration;
}
function setVolume() {
    audio.volume = document.getElementById('volume').value;
}
audio.ontimeupdate = function() {
    let progress = document.getElementById('progress');
    progress.value = (audio.currentTime / audio.duration) * 60;
}
audio.onended = next;
loadSong(current);
