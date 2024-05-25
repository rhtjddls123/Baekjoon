const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (x) => {
  input.push(x);
}).on("close", () => {
  const N = +input[0].split(" ")[0];
  const K = +input[0].split(" ")[1];
  const S = input[1].split(" ");
  const D = input[2].split(" ");
  solution(N, K, S, D);
});

function solution(N, K, S, D) {
  const reverseShuffle = reverseD(D);
  const originArr = Array(N);

  for (let i = 0; i < K; i += 1) {
    for (let j = 0; j < N; j += 1) {
      originArr[j] = S[reverseShuffle[j] - 1];
    }

    S = [...originArr];
  }

  console.log(originArr.join(" "));
}

function reverseD(D) {
  const arr = Array(D.length);
  for (let i = 0; i < D.length; i += 1) {
    arr[D[i] - 1] = D.findIndex((v) => v === D[i]) + 1;
  }
  return arr;
}
