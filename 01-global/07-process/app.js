/**
 * process 모듈
 * interface Process 참고
 */

const process = require("process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

// 0초 후, 콜백 함수 출력
setTimeout(() => {
  console.log("setTimeout");
}, 0);

// *task Queue에 있는 순서를 무시하고, 가장 우선적으로 아래 콜백 함수를 Task Queue에 넣는다.
process.nextTick(() => {
  console.log("nextTick");
});

// node는 아래와 같은 무거운 연산 처리에 오래 걸린다.
for (let i = 0; i < 1000; i++) {
  console.log(i);
}
