const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (x) => {
  input.push(x);
}).on("close", () => {
  const quack = input[0];

  solution(quack);
});

function solution(quack) {
  const quacks = { q: 0, u: 0, a: 0, c: 0, k: 0 };
  // q,u,a,c,k순으로 이전것보다 크기가 커지면 안됨
  // q는 무조건 들어와도 됨
  // u가 들어오면 q의 개수 확인
  // a가 들어오면 a의 개수 확인 ... 이런식으로
  // 오리 수를 구하는건
  // 완성된게 없을 때 q의 개수를 매번 업데이트
  // 완성된게 생길 경우 q-k와 이전 개수중 큰것으로 업데이트
  if (quack.length % 5 !== 0 || quack[quack.length - 1] !== "k") {
    // 울음소리의 길이가 5의 배수가 아니거나 마지막이 k가 아닐경우
    console.log(-1);
    return;
  }

  let result = 0;

  for (let i = 0; i < quack.length; i += 1) {
    const str = quack[i];

    quacks[str] += 1;

    if (
      (str === "u" && quacks["q"] < quacks["u"]) ||
      (str === "a" && quacks["u"] < quacks["a"]) ||
      (str === "c" && quacks["a"] < quacks["c"]) ||
      (str === "k" && quacks["c"] < quacks["k"])
    ) {
      console.log(-1);
      return;
    }

    result = Math.max(result, quacks["q"] - quacks["k"]);
  }

  console.log(result);
}
