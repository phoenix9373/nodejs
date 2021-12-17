/**
 *
 * 2. stream으로 구현한 예제.
 * 장점: 컴퓨터 메모리가 적어도, 지정한 크기만큼 읽고 쓰기를 반복하기 때문에 메모리 오버플로우가 발생할 가능성이 적다.
 */

const fs = require("fs");

// ReadStream을 반환한다. => event-driven 방식으로 동작한다.
const data = [];
const readStream = fs.createReadStream("./file.txt", {
  // highWaterMark: 8, // default로 64 kbytes를 stream하게 조각조각 가져온다.
  encoding: "utf-8",
});

// event 등록, utf-8로 받으므로 string 형태로 data를 받음.
readStream.on("data", (chunk) => {
  console.count("data");
  data.push(chunk);
});

readStream.on("end", () => {
  console.log(data.join());
});

// error 발생 시, 이벤트 처리
readStream.on("error", (error) => {
  console.error(error);
});
