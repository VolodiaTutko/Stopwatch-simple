let [seconds, minutes, hours] = [0, 0, 0];
let timeRef = document.querySelector(".time-display");
let int = null;


document.getElementById("start").addEventListener("click",
() => {

    if (int !== null)
    {
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

document.getElementById("stop").addEventListener("click",
() => {
    if (int !== null)
    {
        clearInterval(int);
    }
});


document.getElementById("reset").addEventListener("click",
() => { 
    clearInterval(int); 
    [seconds, minutes, hours] = [0, 0, 0];
    timeRef.innerHTML = "00:00:00";
});



function displayTimer() {
    seconds += 0.01;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds.toFixed(1) : seconds.toFixed(1);

    timeRef.innerHTML = `${h}:${m}:${s}`;
}




