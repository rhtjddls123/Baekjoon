// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./a.txt").toString().trim().split("\r\n");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (x) => {
  input.push(x);
}).on("close", () => {
  const n = +input[0];
  const files = input.slice(1);

  solution(n, files);
});

function solution(n, files) {
  const types = {};
  for (const i of files) {
    const type = i.substring(i.lastIndexOf(".") + 1);
    types[type] = types[type] ? types[type] + 1 : 1;
  }

  const keys = Object.keys(types).sort();
  let result = "";
  for (const i of keys) {
    result += i + " " + types[i] + "\n";
  }
  console.log(result);
}
