let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;
const startStopButton = document.getElementById("startStop");
const StartStopwatch = () => {
    if (timer === false) {
        timer = true;
        startStopButton.innerHTML = "<i class='bx bx-pause'></i>";
        stopwatch();
    } else {
        timer = false;
        startStopButton.innerHTML = "<i class='bx bx-play'></i>";
    }
}
function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    if (timer == false){
        startStopButton.innerHTML = "<i class='bx bx-play'></i>";
    }
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML ="00";
}
function stopwatch(){
    if(timer==true){
        count = count + 1;
        if(count==100){
            sec += 1;
            count = 0;
        }
        if(sec==60){
            min += 1;
            sec = 0;
        }
        if(min==60){
            hr += 1;
            min = 0;
            sec = 0;
        }

        var hrS = hr;
        var minS = min;
        var secS = sec;
        var countS = count;

        if(hr<10){
            hrS = "0"+hrS;
        }
        if(min<10){
            minS = "0"+minS;
        }
        if(sec<10){
            secS = "0"+secS;
        }
        if(count<10){
            countS = "0"+countS;
        }

        document.getElementById("hr").innerHTML = hrS;
        document.getElementById("min").innerHTML = minS;
        document.getElementById("sec").innerHTML = secS;
        document.getElementById("count").innerHTML = countS;
        setTimeout("stopwatch()",10);
    }
}

