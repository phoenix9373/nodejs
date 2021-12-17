/**
 * stream
 * - stream 이란?
 * - stream 장점?
 */

const fs = require("fs");

// 1. 비효율적인 예제: file.txt를 모두 읽은 후, file2.txt를 저장한다.
// *문제점: file.txt 메모리가 현재 컴퓨터의 메모리보다 큰 경우, write 이전에 데이터가 손실된다.

const beforeMem = process.memoryUsage.rss();
// *rss: Resident Set Size -> 총 메인 메모리 중 해당 프로세스에 할당된 메모리

fs.readFile("./file.txt", (_, data) => {
  fs.writeFile("./file2.txt", data, () => {});

  // memory 사용량 계산
  const afterMem = process.memoryUsage.rss();
  const diff = afterMem - beforeMem;
  const consumedMem = diff / 1024 / 1024; // MB 단위로 변환
  console.log("Consumed Memory: ", consumedMem, "MB");
});
