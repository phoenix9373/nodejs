/**
 * path 모듈
 * tip: 운영체제별로 파일 경로가 달라지므로, join, path.sep 등을 적극 활용해야한다.
 *
 * 파일 경로 예시
 * - POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
 * - Window: 'C:\\temp\\myfile.html'
 */

const path = require("path");

console.log(__dirname);
console.log(__filename);

// 구분자(separator), 환경 변수 구분자(delimiter)
console.log(path.sep);
console.log(path.delimiter);

// basename: file 이름만
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));

// dirname: 파일 경로만
console.log(path.dirname(__filename));

// extension: 확장자만
console.log(path.extname(__filename));

// parse: 경로를 parsing한 결과
const parsed = path.parse(__filename);
console.log(parsed);
console.log(parsed.name);

// format: parse된 객체를 다시 경로 string 형태로
const str = path.format(parsed);
console.log(str);

// isAbsolute: 절대경로, 상대경로 구분
console.log("isAbsolute?", path.isAbsolute(__dirname)); // 절대경로
console.log("isAbsolute?", path.isAbsolute("../")); // 상대경로

// normalize: 잘못된 경로 수정
console.log(path.normalize("./folder////////sub"));

// join: 경로 병합
console.log(__dirname + path.sep + "image"); // 구분자 활용
console.log(path.join(__dirname, "image"));
