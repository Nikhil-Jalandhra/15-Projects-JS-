const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const music = document.querySelector("audio");
const img = document.querySelector("img")

const song = [
    {
        name: "song-1",
        title: "Gunde Chacha Tau Ke",
        artist: "Masoom Sharma"
    },
    {
        name: "song-2",
        title: "Haryana Hood",
        artist: "Irshad Khan"
    },
    {
        name: "song-3",
        title: "Dabya ni karde",
        artist: "Ndee Kundu | Bintu Pabra"
    }
]

let isplaying = false;

const playMusic = () => {
    music.play();
    isplaying = true;
    play.classList.replace("fa-circle-play" , "fa-circle-pause")
    img.classList.add("anime")
}

const pauseMusic = () => {
    music.pause();
    isplaying = false
    play.classList.replace("fa-circle-pause" , "fa-circle-play")
    img.classList.remove("anime")
}

play.addEventListener("click" , () =>{
    isplaying ? pauseMusic() : playMusic();
})

const loadSong = (song) => {
    title.textContent = song.title;
    artist.textContent = song.artist;
    music.src = "music/" + song.name + ".mp3";
    img.src = "Image/" + song.name + ".jpg";
}

songIndex = 0;

const nextSong = () =>{
    songIndex = (songIndex + 1) % song.length;
    loadSong(song[songIndex]);
    playMusic();
}

const prevSong = () =>{
    songIndex = (songIndex - 1 + song.length) % song.length;
    loadSong(song[songIndex]);
    playMusic();
}

next.addEventListener("click" , nextSong);
prev.addEventListener("click" , prevSong);

