// 数値は number だが
const x: number = 3;
// 多くの場合で推論してくれるので書かなくて良いことが多い. この場合は 型を書かないのほうが型の範囲を絞り込める
const y = 4.5; // y の型は 4.5

// 数値にはリテラル型があり, 更に協力な制限ができる
// 12 という数値しか持てない型
const z: 12 = 12;

// 演算子は JavaScript と同じ
console.log(x); // 3;
console.log(x + 1);  // => 3 加算
console.log(x - 1);  // => 2 減算
console.log(x * 2);  // => 6 乗算
console.log(x ** 2);  // => 9 冪乗 x^2
console.log(x + y); // => 7.5

// さすがに, 数値リテラル型同士の足し算の値までは, 型を決めてくれない
const e = x + y; // e の型は number. 7.5 にはならない

// Idris ならできる https://zenn.dev/blackenedgold/books/introduction-to-idris/viewer/what-is-idris
// 型の方の演算なら提案がされている https://github.com/microsoft/TypeScript/issues/26382
