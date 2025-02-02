
// function stopwatch(){
//     document.getElementById("stopWatch-section").innerHTML 
// }


let secs = 0;
let mins = 0;
let hours = 0;
let interval = 0;
let display;
let isPlaying = false;


function displayTime(){
    if(!isPlaying){
    interval = setInterval(() => {
        
        secs++
        if(secs == 60){
            secs = 0;
            mins++
        }
        if(mins == 60){
            mins = 0;
            hours++
        }

        if (mins < 60) {
            display = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
        } 
        
        else {
            display = `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
        }


        document.getElementById("display").value = display;
    }, 1000);

    document.getElementById("play").innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = true;
    document.getElementById("end").disabled = false;
}else {
        clearInterval(interval);
        document.getElementById("play").innerHTML = '<i class="fa-solid fa-play"></i>';
        isPlaying = false;
    }
}


// function stopwatch(){
//     clearInterval(interval)
//     play.disabled = false
// }



function cleardisplayTime() {
    clearInterval(interval);
    secs = 0;
    mins = 0;
    hours = 0;
    document.getElementById("display").value = "00:00"
    document.getElementById("play").innerHTML = '<i class="fa-solid fa-play"></i>';
    end.disabled = true
  }

