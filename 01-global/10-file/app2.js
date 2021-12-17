/**
 * file 모듈 - 다양한 예제
 * 파일 - 읽기, 쓰기
 * 중요: API 확인 시, 인자는 무엇이 있는지 / 반환되는 값은 무엇인지 / Promise의 경우, catch를 활용한 에러 처리 필수
 */

const fs = require("fs").promises;

// 비동기적으로 동작하기 때문에 코드의 순서에 상관없이 실행 순서가 보장되지 않는다.
// *then을 활용하여 순서를 보장할 수 있다.

// read a file: 파일 읽음.
fs.readFile("./text.txt", "utf-8").then(console.log).catch(console.error);

// writing a file: 기존 데이터를 덮어씌움.
fs.writeFile("./text.txt", "Hello, Dream 😀").catch(console.error);

// appending a file: 기존 데이터 유지, 데이터 추가
fs.appendFile("./text.txt", "Hi, Dreaming 🌯").catch(console.error);

// copy: 파일 복사 -> 코드 순서가 보장되지 않아서 비어있다.
fs.copyFile("./text.txt", "./text2.txt").catch(console.error);

// folder

// mkdir: 폴더 생성
fs.mkdir("sub-folder").catch(console.error);

// readdir: 현재 경로에 있는 파일 및 폴더 명 출력 => string[]
fs.readdir("./").then(console.log).catch(console.error);
