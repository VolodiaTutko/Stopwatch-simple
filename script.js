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


console.log((function recursive(a,v, d){ return Math.pow(a*d,v);})(2,5,2))


let mod = (a,b) => a%b;
console.log(mod(9,4));
console.log(mod(11111,9));
console.log(mod(45,14))
let mass = [];
mass.unshift(1,2,3);
console.log(mass);
mass.shift();
console.log(mass);
mass.copyWithin(1,0)
mass.copyWithin();
console.log(mass);

// function createPhoneNumber(numbers){
//     return `(${numbers.slice(0,3).})  ${numbers.slice(3,6)} - ${numbers.slice(6,10)}`;
  
// };
// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(createPhoneNumber(numbers));
cc = { a: '3', b: '4', c: '5'};

function f(x, cc) { 
    if(x==cc['a'])
      {
      return cc['b'];
      }  
      else if(x == cc['b'])
      {
        return cc['c']
      } 
      else if(x == cc['c'])
      {
        return cc['a']
      }   

  }
console.log(cc.b)
// function f(x, cc) {
//   switch (x) {
//     case cc['a']:
//       return cc['b'];
//     case cc['b']:
//       return cc['c'];
//     case cc['c']:
//       return cc['a'];
//     default:
//       return null; 
//   }
// }

// function calculateSum(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }

//   return sum;
// }
// function sumMul(n,m){
//     if(n>0 && m >0)
//     { 
//         let subsum = n;
//    let arr_subsum = [];
//    do 
//   {
//     console.log(arr_subsum);
//     arr_subsum.push(subsum);
//     subsum +=n;
//   }while(subsum <= m-1)
//   return calculateSum(arr_subsum);}
//   else
//   {
//     return "INVALID";
//   }
  
// }

// console.log(sumMul(14,2114));
// function sumMul(n,m){
//   if (n >= m) return "INVALID";

// var sum = 0;
//   for (var i = n; i < m; i+=n) {
//     sum += i;
//   }
//   return sum;
// }
function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let text_arr = text.toLowerCase().replaceAll(' ', '').replaceAll('.','').replaceAll('\'','').split('');
  let indexes = [];
  
  for (let i = text_arr.length - 1; i >= 0; i--) {
  if (!alphabet.includes(text_arr[i])) {
    text_arr.splice(i, 1);
  }
}
  text_arr.forEach(index => indexes.push(alphabet.indexOf(index)+1));
  return indexes.toString().replaceAll(',',' ');
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."))