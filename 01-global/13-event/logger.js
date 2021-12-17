/**
 * main.js와 logger.js를 같이 볼 것.
 * 목표: 어떤 일을 수행하기 전과 후에 event를 발생시키는 작업을 할 때.
 */

const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(callback) {
    this.emit("log", "started...");
    callback();
    this.emit("log", "ended");
  }
}

module.exports.Logger = Logger;
