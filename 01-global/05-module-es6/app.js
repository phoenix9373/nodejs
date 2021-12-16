/**
 * module
 * 1. commonJS: node에서 제공하는 모듈
 * 2. module: JS에서 제공하는 모듈
 * package.json의 Option => "type": "module", // javascript 자체에서 제공하는 모듈 사용
 */

// JS module 이용
import { increase, getCount } from "./counter.js";

increase();
increase();
console.log(getCount());
