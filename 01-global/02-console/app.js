/**
 * 2. console 활용
 */

// console.log 활용방법
console.log("logging");
console.clear();

// console level: 개발 단계부터 콘솔 레벨을 다르게 하는 것이 좋다.
console.log("log"); // 개발
console.info("info"); // 정보
console.warn("warn"); // 경보
console.error("error"); // 에러, 사용자 에러, 시스템 에러

// assert: 첫 인자 값이 false 일때만 출력.
console.assert(2 === 3, "not same");
console.assert(2 === 2, "same");

// print object
const student = { name: "jinwoo", age: 20, company: { name: "AC" } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: true, depth: 0 }); // option 추가 가능

// measuring time: 시간 측정
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

// counting: 함수 호출 횟수
function a() {
  console.count("a function");
}
a();
a();

// trace: debugging에 유용 => Call Stack 과정을 보여준다.
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log("f3");
  console.trace();
}
f1();
