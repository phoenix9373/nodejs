/**
 * Custom Event 만들기
 * - EventEmitter는 createReadStream과 같은 클래스의 조상이다.
 * - 따라서 stream 객체에서 이벤트를 등록, 해제하는 메서드를 사용할 수 있다.
 */

const EventEmitter = require("events");
const emitter = new EventEmitter();

// event 등록
const callback1 = (args) => {
  console.log("first callback - ", args);
};
emitter.on("ellie", callback1);

emitter.on("ellie", (args) => {
  console.log("second callback - ", args);
});

// emit => event 발생, removeListener => event 제거 / removeAllListener => 해당 event의 모든 콜백 제거
emitter.emit("ellie", { message: 1 });
emitter.emit("ellie", { message: 2 });
emitter.removeListener("ellie", callback1); // 특정 event의 하나의 콜백함수만 제거
emitter.emit("ellie", { message: 3 });
