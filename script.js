var play1 = document.getElementById("audio1")
progress = document.querySelector("#progress")
var tempo = document.getElementById("tempo")


function tocarPause(){

    
    console.log("volume"+play1.volume)

    if(play1.paused){
        let img = document.getElementById("play");
        play1.play();
        console.log("play");
        img.src = "./assets/images/stop.png";
        play.volume = 0.5;
        
        
    } else {
        let img = document.getElementById("play");
        play1.pause();
        img.src = "./assets/images/play.png";
        
        
    }
    
}

function parar(){
    let img = document.getElementById("play");
    console.log(img);
    play1.pause();
    play1.currentTime = 0;
    play1.playbackRate = 1;
    img.src = "./assets/images/play.png"
    
}

function avancar(){
    let img = document.getElementById("avancar")
    img.src = "./assets/images/avancar.png"
    setTimeout(voltaImg, 2000)
    play1.playbackRate += 0.5;

    let rate = play1.playbackRate 
    
    console.log(rate)
    if (rate == 2){
        img.src = "./assets/images/reverter.png"
    } else if (rate >2) {
        play1.playbackRate = 1;
    } else {}

    

}

function desacelarar(){
    let img = document.getElementById("desacelarar")
    img.src = "./assets/images/voltar.png"
    setTimeout(voltaImg2, 2000)
    play1.playbackRate -= 0.1;

    let rate = play1.playbackRate 
    
    console.log(rate)
    if (rate == 0.7000000000000001){
        img.src = "./assets/images/reverter.png"
    } else if (rate == 0.6000000000000001) {
        play1.playbackRate = 1;
    } else {}
}

function teste(){
    play1.playbackRate -= 0.1
    console.log(play1.playbackRate)
}

function voltaImg(){
    let img = document.getElementById("avancar")
    img.src = "./assets/images/acelerar.png"
}

function voltaImg2(){
    let img = document.getElementById("desacelarar")
    img.src = "./assets/images/desacelarar.png"
}

function aumentarVol(){
    play1.volume += 0.1;
    console.log(play1.volume)
    if(play1.volume == 1){
        alert("volume máximo")
    } else if (play1.volume > 1){
        alert("Volume máximo não é possivel aumentar! ")
    }
    
}

function diminuirVol(){
    play1.volume -= 0.1;
    console.log(play1.volume)

    if (play1.volume == 0.20000000000000015){
        alert("Volume minimo")
    } else if (play1.volume < 0.1999999999){
        alert("Não é possivel abaixar mais do que isso!")
        play1.volume = 0.20000000000000015; 
        console.log(play1.volume)
    }

}

play1.addEventListener('timeupdate', function(){
    let mile = parseInt(play1.currentTime);

    progress.value = play1.currentTime / play1.duration;
    tempo.innerHTML = mile
   
})

