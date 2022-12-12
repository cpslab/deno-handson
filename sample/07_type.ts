const hello: string = "hello"; // 文字列は string
const world = "world"; // 数値と同様にさらに強力な型がある. world の型は "world"

// 数値よりもさらに強力で, しっかり文字列結合を型が強いままできる
const helloWorld: `helloworld` = `hello${world}`;
