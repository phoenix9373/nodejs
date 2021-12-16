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

export { increase, getCount };
