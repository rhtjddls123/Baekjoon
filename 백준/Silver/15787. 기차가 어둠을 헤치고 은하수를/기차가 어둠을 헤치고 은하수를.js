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
  const N = +input[0].split(" ")[0];
  const M = +input[0].split(" ")[1];
  const command = [];

  for (let i = 0; i < M; i += 1) {
    command.push(input[i + 1].split(" "));
  }

  solution(command, N);
});

function solution(command, N) {
  const train = Array.from({ length: N }, () => Array(20).fill(0));

  for (let i = 0; i < command.length; i += 1) {
    if (command[i].length === 2) {
      move(train, command[i][0], command[i][1]);
    }
    if (command[i].length === 3) {
      inAndOut(train, command[i][0], command[i][1], command[i][2]);
    }
  }

  const cross = {};
  for (const t of train) {
    cross[t] = "success";
  }
  console.log(Object.keys(cross).length);
}

function inAndOut(train, c, i, x) {
  // 승차 또는 하차 시
  i -= 1;
  x -= 1;
  if (c === "1") {
    // 1번 명령
    if (train[i][x] === 0) {
      // i번 기차 x번 좌석 승객 태우기
      train[i][x] = 1;
    }

    return;
  }

  if (c === "2") {
    // 2번 명령

    if (train[i][x] === 1) {
      // i번 기차 x번 좌석 승객 내리기
      train[i][x] = 0;
    }

    return;
  }
}

function move(train, c, i) {
  // 승객 이동 시

  i -= 1;
  if (c === "3") {
    // 3번 명령

    train[i] = [0, ...train[i].slice(0, train[i].length - 1)];

    return;
  }

  if (c === "4") {
    // 4번 명령

    train[i] = [...train[i].slice(1), 0];

    return;
  }
}
