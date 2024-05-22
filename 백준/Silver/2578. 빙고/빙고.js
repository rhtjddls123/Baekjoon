const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (x) => {
  input.push(x);
}).on("close", () => {
  const bingo = [];
  const call = [];
  for (let i = 0; i < 5; i += 1) {
    const line = input[i].split(" ");
    bingo.push(line);
  }

  for (let i = 5; i < input.length; i += 1) {
    const line = input[i].split(" ");
    call.push(...line);
  }

  solution(bingo, call);
});

function solution(bingo, call) {
  let bingoCount = 0;
  const calledBingo = [];
  let result = 0;
  for (let i = 0; bingoCount < 3; i += 1) {
    const idx = findIdx(bingo, call[i]);
    calledBingo.push(idx);
    bingoCount = bingoCheck(calledBingo);
    result = i + 1;
  }
  console.log(result);
}

function findIdx(bingo, num) {
  for (let i = 0; i < bingo.length; i += 1) {
    for (let j = 0; j < bingo[i].length; j += 1) {
      if (bingo[i][j] === num) return [i, j];
    }
  }
}

function bingoCheck(calledBingo) {
  const rowLine = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
    ],
    [
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 3],
      [3, 4],
    ],
    [
      [4, 0],
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4],
    ],
  ];

  const colLine = [
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
      [3, 2],
      [4, 2],
    ],
    [
      [0, 3],
      [1, 3],
      [2, 3],
      [3, 3],
      [4, 3],
    ],
    [
      [0, 4],
      [1, 4],
      [2, 4],
      [3, 4],
      [4, 4],
    ],
  ];

  const diagLine = [
    [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
    ],
    [
      [0, 4],
      [1, 3],
      [2, 2],
      [3, 1],
      [4, 0],
    ],
  ];

  let count = 0;

  for (let i = 0; i < colLine.length; i += 1) {
    const include = includesArr(calledBingo, colLine[i]);
    if (include) count += 1;
  }
  for (let i = 0; i < rowLine.length; i += 1) {
    const include = includesArr(calledBingo, rowLine[i]);
    if (include) count += 1;
  }
  for (let i = 0; i < diagLine.length; i += 1) {
    const include = includesArr(calledBingo, diagLine[i]);
    if (include) count += 1;
  }
  return count;
}

function includesArr(mainArr, subArr) {
  const include = subArr.every((sub) =>
    mainArr.some((main) => main.every((val, idx) => val === sub[idx]))
  );
  return include;
}
