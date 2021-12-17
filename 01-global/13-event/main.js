/**
 * main.js와 logger.js를 같이 볼 것.
 *
 * 실수하는 부분: logger.js에서 등록한 emitter로 emit한 것과 main.js에서 emitter는 전혀 관련이 없음.
 * - 따라서 여기서 등록한 'log' 이벤트는 현재 객체에서 emit해야 동작한다.
 *
 * 해결방법: 스스로 emitter가 되어라? => EventEmitter를 상속하는 Logger 클래스를 만든다.
 *
 * 포인트: EventEmitter는 한 번 객체를 만들면, 해당 객체에서 등록하고 emit한 이벤트만 들을 수 있다!!
 */

const logger = require("./logger.js");
const emitter = new logger.Logger();

emitter.on("log", (event) => {
  console.log(event);
});

emitter.log(() => {
  console.log(".....doing something!");
});
