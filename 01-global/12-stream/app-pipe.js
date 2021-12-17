/**
 * piping
 * - stream과 stream을 연결하여 데이터가 '물처럼' 흐르듯 만드는 기능
 * - readStream과 writeStream을 연결
 */
const fs = require("fs");
const zlib = require("zlib"); // 압축 라이브러리

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./file4.zip");
const piping = readStream.pipe(zlibStream).pipe(writeStream); // read 후, 압축 후, write
piping.on("finish", () => {
  console.log("finish!!");
});

const http = require("http");
const server = http.createServer((req, res) => {
  // // not good
  // fs.readFile("file.txt", (err, data) => {
  //   res.end(data);
  // });

  // good, better
  const stream = fs.createReadStream("./file.txt");
  stream.pipe(res);
});
server.listen(3000);
