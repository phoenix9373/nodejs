// count 변수는 외부에 노출하지 않음.
let count = 0;

function increase() {
  count++;
}

function decrease() {
  count--;
}

function getCount() {
  return count;
}

// counter module에는 2가지 함수가 연결된다.
module.exports.getCount = getCount;
module.exports.increase = increase;

// module 객체 확인
console.log(module);

// ** exports 는 module.exports를 참조하는 값을 가진 변수이다. => exports !== module.exports
// ** 따라서 exports 값을 변경하면 module.exports에 접근할 수 없다.
exports = {};
console.log(exports === module.exports);
