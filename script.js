// const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
// const PARTICLES = document.querySelectorAll('.star')
// PARTICLES.forEach(P => {
//   P.setAttribute('style', `
//     --angle: ${RANDOM(0, 360)};
//     --duration: ${RANDOM(6, 20)};
//     --delay: ${RANDOM(1, 10)};
//     --alpha: ${RANDOM(40, 90) / 100};
//     --size: ${RANDOM(2, 6)};
//     --distance: ${RANDOM(40, 200)};
//   `)
// })
let seconds = 0;
let minutes = 0;
let hours = 0;
let timeRef = document.querySelector(".time-display");
let int = null;

document.getElementById("start").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("stop").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(int);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeRef.innerHTML = "00 : 00 : 00";
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

    timeRef.innerHTML = `${h} : ${m} : ${s}`;
}
//---------------------------------
let Name = "oleksandr";
console.log(Name);

function sum(){
    let sum = 10+100;
    return sum;
}

console.log(sum());

console.log(typeof Name)

// Тернарний оператор
// (condition) ? (true) : (false);
// if (10<12) ? console.log('true') : console.log('false')
// variable = (10<12) ? console.log('true') : console.log('false')