const hello = 'hello'; // シングルクォートか、
const world = "world"; // ダブルクォートで文字列を表す

console.log(hello); // "hello"

console.log(world); // "world"

console.log(hello.length); // 文字列の長さ;=> "5"

const hw = hello + " " + world; // 文字列の結合

console.log(hw); // => "hello world"

// 文字列の代入↓

const hw12 = `${hello} ${world} ${12}`;

console.log("%s %s %d", [hello, world, 12]); // => "hello world 12"

// 「Unicode型」というものはない, string は内部表現がUTF16である.
// String のオブジェクト型もあるが使うことはないだろう
const objectString = new String("日本語");
console.log(objectString, typeof objectString); // => [String: '日本語'] object

// Java とは違い, 文字列は === で値を比較できる. プリミティブな値.
// UTF16でのバイナリを比較しているので場合によっては 等しくならない
console.log("🎈" === "🎈"); // => true