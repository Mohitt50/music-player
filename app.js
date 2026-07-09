const music = new Audio('audio/1.mp3');
// music.play(); 

const songs = [
    {
        id: 1,
        songsName: `On My Way<br><div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id: 2,
        songsName: `Tainu Khabar Nahi<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/2.jpg"
    },
    {
        id: 3,
        songsName: `Tere Bina Beswadi<br><div class="subtitle">A.R. Rahman</div>`,
        poster: "img/3.jpg"
    },
    {
        id: 4,
        songsName: `Nazm Nazm<br><div class="subtitle">Ayushman Khurana</div>`,
        poster: "img/4.jpg"
    },
    {
        id: 5,
        songsName: `Payal<br><div class="subtitle">Honey Singh</div>`,
        poster: "img/5.jpg"
    },
    {
        id: 6,
        songsName: `Besabriyan<br><div class="subtitle">Sushant Singh Rajput</div>`,
        poster: "img/6.jpg"
    },
    {
        id: 7,
        songsName: `Azul<br><div class="subtitle">Guru Randhava</div>`,
        poster: "img/7.jpg"
    },
    {
        id: 8,
        songsName: `Puchada hi nahi<br><div class="subtitle">Neha Kakkar</div>`,
        poster: "img/8.jpg"
    },
    {
        id: 9,
        songsName: `Raataan Lambiya<br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/9.jpg"
    },
    {
        id: 10,
        songsName: `Sab Tera<br><div class="subtitle">Sanjeev-Chturvedi</div>`,
        poster: "img/10.jpg"
    },
    {
        id: 11,
        songsName: `Soniyo<br><div class="subtitle">Sonu Nigam</div>`,
        poster: "img/11.jpg"
    },
    {
        id: 12,
        songsName: `Tu jane na<br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/12.jpg"
    },
    {
        id: 13,
        songsName: `Tum hi ho bandhu<br><div class="subtitle">Neeraj Shridhar</div>`,
        poster: "img/13.jpg"
    },
    {
        id: 14,
        songsName: `Tera fitoor<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/14.jpg"
    },
    {
        id: 15,
        songsName: `Vaaste<br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/15.jpg"
    },
    {
        id: 16,
        songsName: `Pal pal dil ke paas<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/16.jpg"
    },
    {
        id: 17,
        songsName: `Halka halka suroor<br><div class="subtitle">Fenny-Khan</div>`,
        poster: "img/17.jpg"
    },
    {
        id: 18,
        songsName: `Give me some shine<br><div class="subtitle">Suraj Jagan</div>`,
        poster: "img/18.jpg"
    },
    {
        id: 19,
        songsName: `Bairan<br><div class="subtitle">Banjaare</div>`,
        poster: "img/19.jpg"
    },
    {
        id: 20,
        songsName: `Jeene laga hun<br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/20.jpg"
    },
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songsName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play(); 
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})  


const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill'); 
    })
}

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = "rgb(105, 105, 105, .0)"
    })
}


let index = 0;
// index++;
// console.log(index);

let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songsName } = elss;
            // let { songsName, poster } = elss;   from this line we can also access the poster of the song
            title.innerHTML = songsName;
            // poster_master_play.src = poster;   from this line we can also access the poster of the song
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105, 105, 105, .1)';
        makeAllplays();
        el.target.classList.remove("bi-play-circle-fill");
        el.target.classList.add("bi-pause-circle-fill");
        wave.classList.add('active1');
    })
})



let currentStart  = document.getElementById('currentStart');
let currentEnd  = document.getElementById('currentEnd');

music.addEventListener('timeupdate', ()=>{
    let music_crr = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_curr);
    // console.log(music_dur);

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur % 60);
    // console.log(min1);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;
})







let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=> {
    pop_song.scrollLeft += 330;  
})

pop_song_left.addEventListener('click', ()=> {
    pop_song.scrollLeft -= 330;  
})

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', ()=> {
    item.scrollLeft += 330;  
})

pop_art_left.addEventListener('click', ()=> {
    item.scrollLeft -= 330;  
})