/**
 * os 모듈
 */

const os = require("os");

console.log(os.EOL === "\n");

// 윈도우의 다양한 정보들
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.uptime());
console.log(os.version());
