/**
 * timer 모듈
 * global 객체에 포함되어있다.
 */

let num = 1;
const interval = setInterval(() => {
  console.log(num++);
}, 1000);

setTimeout(() => {
  console.log("timeout!");
  clearInterval(interval);
}, 5000);
