/**
 * module
 * counter.js에서 module 가져오기
 * counter에서 어떤 메서드를 export할지 선언
 */

// module 이용
const counter = require("./counter.js"); // module 가져오기

counter.increase();
counter.increase();
console.log(counter.getCount());
