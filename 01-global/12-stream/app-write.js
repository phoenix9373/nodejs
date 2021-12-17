/**
 * write에서도 stream을 활용할 수 있다.
 */

const fs = require("fs");
const writeStream = fs.createWriteStream("./file3.txt");

// writeStream 객체에 'finish' 이벤트가 발생하면 callBack 함수 호출
writeStream.on("finish", () => {
  console.log("finished!");
});

writeStream.write("Hello!");
writeStream.write("World!");
writeStream.end(); // call 'finish' event
