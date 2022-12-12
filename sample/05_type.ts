// let の場合はいい感じに範囲を広げてくれる
let x = 3; // x の型は number
const y = 4.5; // y の型は 4.5

// 型を指定することによって範囲をさらに広げることもできる
let value: number | string = 32;
value = "ok";

// typeof を使ってよって分岐できる. しっかり型が合っているか調べてくれる
const multiple3OrRepeat3TimesLog = (value: number | string): void => {
  if (typeof value === "number") {
    console.log(value * 3);
    return;
  }
  console.log(value.repeat(3));
};

const t = true; // t の型は ture
const f = false; // f の型は false
x = t; // 型エラーが発生する. x は number で, t が true のため代入できず.
// 代入したい場合は, x の定義の型に書けば良い
// エラーメッセージ => 型 'boolean' を型 'number' に割り当てることはできません
