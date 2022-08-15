
const btn = document.querySelectorAll(".btn-3d");
const soundName = document.querySelectorAll(".file-name")
const audioClips = ["sounds/AAAAAAAAAAAAAAAAAHAHA.wav", "sounds/Areeeeeee.wav", "sounds/Augh.wav", "sounds/auuuuuugh how ya like that huh.wav", "sounds/Come on, son.wav", "sounds/Dropped that right over there.wav", "sounds/HHHHAWWWWWWWWWWWWWWGH.wav", "sounds/RIP ears.mp3"];

//Generate audio and file names
audioClips.forEach((filename, index) =>
    {
        audioClips[index] = new Audio (filename);
        soundName[index].textContent = filename.slice(7, -4).substring(0, 8);


        btn[index].addEventListener("click",() => 
        {
            //Check if clip is paused or not to add start/stop functionality
            if(!audioClips[index].paused){
                audioClips[index].pause();
                audioClips[index].currentTime = 0; 
            } else {
                audioClips[index].play();
            }
        })
    });

