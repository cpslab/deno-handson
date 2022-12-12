let x = 3;
const y = 4.5;

console.log(typeof x); // "number"
console.log(typeof y); // "number"
const t = true;
const f = false;
x = t;
console.log(typeof x); // "number"

console.log(typeof t);  // "boolean"

console.log(t && f); // 論理積; "false"
console.log(t || f);  // 論理和; "true"

console.log(!t);  // 否定; "false"

// 排他的論理和は boolean に対しては標準の演算子では 存在しない. ビットなら 100 ^ 100 
