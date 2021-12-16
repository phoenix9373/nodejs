/**
 * 1. global
 */

// vscode에 node 사용중임을 알리자!
const fs = require("fs");

// browser에서 window 객체 = node에서 global 객체(생략 가능)
console.log(global);

global.hello = () => {
  console.log("hello");
};

global.hello();
// or
hello();
