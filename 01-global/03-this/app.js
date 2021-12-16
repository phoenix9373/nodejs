/**
 * 3. node 환경에서 this
 * - class 에서 this : class
 * - 일반함수 에서 this : global 객체
 * - global scope 에서 this : module.exports
 */

function hello() {
  console.log(this); // 일반함수 this: global 객체
}

hello();

// class 에서 this
console.clear();

class A {
  constructor(a) {
    this.a = a;
  }

  memberFunction() {
    console.log(this); // class this: instance
    console.log(this === global); // global 객체가 아님.
  }
}

const member = new A(1);
member.memberFunction();

console.log(this); // global scope this: module.exports
console.log(this === module.exports);
