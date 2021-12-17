/**
 * buffer란?
 * - 고정된 사이즈의 메모리 덩어리
 * - 숫자의 배열, 데이터의 바이트
 * - fs.readFile()로 파일을 읽을 때, 'utf-8'과 같이 encoding을 하지 않으면 데이터를 그대로 보여준다.(Buffer 형태로)
 */

const fs = require("fs");

// Buffer.from: 문자열로부터 Buffer를 생성
const buf = Buffer.from("Hi");
console.log(buf); // <Buffer 48 69> -> 48은 문자열 H의 unicode, ...
console.log(buf.length); // 2

// index로 접근하면, ASCII Code를 출력한다.
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString()); // Buffer 형태의 데이터를 문자열로.

// create
const buf2 = Buffer.alloc(2); // 초기화 ✅
const buf3 = Buffer.allocUnsafe(2); // 초기화 ⛔, 초기화하지 않으므로 더 빠름.

console.log("length:", buf2.length);
console.log("byteLength:", buf2.byteLength);

buf2[0] = 72;
buf2[1] = 105;
console.log(buf2); // Buffer 정보
console.log(buf2.toString()); // 문자열로 출력

buf2.copy(buf3);
console.log(buf3);

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
