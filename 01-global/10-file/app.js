/**
 * file 모듈
 * 파일 읽기, 쓰기, 변경 등
 */

const fs = require("fs");

/**
 * Node API 사용시 유의사항
 * Node API 활용하는 3가지 형태
 * rename(..., callback(error, data))  => Non-Blocking, 비동기로 동작
 * renameSync(...)           => Blocking, 동기적으로 동작 & 콜백 함수 전달 ❌, 잘못되면 에러 발생, 끝날 때까지 해당 코드에서 머무름
 * primises.rename().then().catch(0) => Promise 형태로 동작
 *
 */

try {
  fs.renameSync("./file.txt", "./newFile.txt"); // 현재 실행 경로에 대한 상대경로
} catch (error) {
  console.error(error);
}

fs.rename("./newFile.txt", "./text.txt", (error) => {
  console.log(error); // null: error가 발생하지 않았기 때문에. rename 3번째 인자 참조
});
console.log("hello");

fs.promises
  .rename("./text2.txt", "./text-new.txt")
  .then(() => console.log("Done!"))
  .catch(console.error);
