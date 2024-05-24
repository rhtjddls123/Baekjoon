const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const square = [];

rl.on("line", (x) => {
  input.push(x);
}).on("close", () => {
  const loop = +input[0];
  solution(loop);
});

function solution(loop) {
  const len = 1 + 4 * (loop - 1);
  let curS = len;
  let curSS = len;
  for (let i = 0; i < len / 2; i += 1) {
    const line = i + 1;
    if (line % 2 !== 0) {
      // 홀수줄일때
      const str =
        "* ".repeat((line - 1) / 2) +
        "*".repeat(curS) +
        " *".repeat((line - 1) / 2);
      square.push(str);
      curS -= 4;
    }

    if (line % 2 === 0) {
      // 짝수일때
      const str =
        "* ".repeat(line / 2) + " ".repeat(curSS - 4) + " *".repeat(line / 2);
      square.push(str);
      curSS -= 4;
    }
  }
  for (let i = 0; i < square.length; i += 1) {
    console.log(square[i]);
  }
  for (let i = square.length - 2; i >= 0; i -= 1) {
    console.log(square[i]);
  }
}