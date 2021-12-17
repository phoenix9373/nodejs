/**
 * 어떤 것이 먼저 출력될까?
 * setTimeout, setImmediate, nextTick
 * setTimeout(0초)와 setImmediate는 비슷하다.
 * nextTick은 Task Queue에 있는 작업 중 가장 우선순위로 간다.
 */

console.log("code1");
setTimeout(() => {
  console.log("setTimeout 0");
}, 0);

console.log("code2");
setImmediate(() => {
  console.log("setImmediate");
});

console.log("code3");
process.nextTick(() => {
  console.log("process.nextTick");
});

// *setTimeout은 실제로 0초 안에 동작할까? -> ❌ setTimeout의 콜백함수가 실행되려면, Call Stack이 비어야한다.
// 그래서! -> ✅ Node를 실행하는 것만으로 다양한 함수들이 실행되기 때문에 0초 후, 실행이 보장되지 않는다.
console.time("time 0");
setTimeout(() => {
  console.timeEnd("time 0");
  console.log("setTimeout 0");
}, 0);
