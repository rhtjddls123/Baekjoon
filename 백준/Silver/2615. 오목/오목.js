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
  const gameBoard = input.map((value) => value.split(" "));

  solution(gameBoard);
});

function solution(gameBoard) {
  // 1. 0,0에서 시작하여 한줄씩 확인(진행방향은 왼쪽->오른쪽)
  // 2. 바둑돌이 나오면 주변을 확인
  // 2-1. 왼쪽과 위는 볼 필요가 없음(진행방향상 이미 다녀온부분이기때문)
  // 2-2. 오른쪽부터 시계방향으로 왼쪽아래까지 확인(i, j+1)부터 (i+1, j-1)까지
  // 2-3. 확인할때 그 방향에 바둑돌 존재시 해당 방향으로 계속 진행
  // 2-4. 5개가 연속되면서 해당 진행방향 다음에 돌이 없으면 종료
  // ***5개일 경우 그 시작점의 이전께 해당색이 아니여야함(6개 이상은 이긴게 아님)***

  let winDate = { success: false };

  for (let i = 0; i < gameBoard.length && !winDate["success"]; i += 1) {
    for (let j = 0; j < gameBoard[i].length && !winDate["success"]; j += 1) {
      if (gameBoard[i][j] === "1") {
        // 검은 돌이 있을 경우 이겼는지 확인 후 이겼으면 종료
        winDate = checkWin(gameBoard, "1", i, j);
      }

      if (gameBoard[i][j] === "2") {
        // 흰 돌이 있을 경우 이겼는지 확인 후 이겼으면 종료
        winDate = checkWin(gameBoard, "2", i, j);
      }
    }
  }

  if (!winDate["success"]) {
    console.log("0");
  } else {
    console.log(winDate["color"]);
    console.log(winDate["i"] + 1, winDate["j"] + 1); // 문제는 1,1부터 시작하기 때문에 1씩 더해줌
  }
}

function checkWin(gameBoard, color, i, j) {
  // color는 현재 돌 색깔, i,j는 현재 위치
  if (checkLeftDown(gameBoard, color, i, j)) {
    // 이 경우 출력에서 가장 왼쪽에 있는 바둑알 출력 시 시작점의 좌표로부터 +4,-4를 해줘야함
    return { success: true, color: color, i: i + 4, j: j - 4 };
  }
  if (
    checkRight(gameBoard, color, i, j) ||
    checkRightDown(gameBoard, color, i, j) ||
    checkDown(gameBoard, color, i, j)
  ) {
    return { success: true, color: color, i: i, j: j };
  }
  return { success: false };
}

function checkRight(gameBoard, color, i, j) {
  let count = 0;
  for (let x = j; x < gameBoard[i].length; x += 1) {
    if (gameBoard[i][x] !== color) {
      break;
    }

    if (gameBoard[i][x] === color) count += 1;
  }

  return count === 5 && (j === 0 || (j > 0 && gameBoard[i][j - 1] !== color));
}

function checkRightDown(gameBoard, color, i, j) {
  let count = 0;
  let x = i;
  let y = j;
  while (true) {
    if (
      x >= gameBoard.length ||
      y >= gameBoard[x].length ||
      gameBoard[x][y] !== color
    ) {
      // 현재 위치가 게임보드를 벗어나거나 다른 돌이 올 경우 정지
      break;
    }

    if (gameBoard[x][y] === color) count += 1;

    x += 1;
    y += 1;
  }

  return (
    count === 5 && (i === 0 || j === 0 || gameBoard[i - 1][j - 1] !== color)
  );
}

function checkDown(gameBoard, color, i, j) {
  let count = 0;
  for (let x = i; x < gameBoard.length; x += 1) {
    if (gameBoard[x][j] !== color) {
      break;
    }

    if (gameBoard[x][j] === color) count += 1;
  }

  return count === 5 && (i === 0 || (i > 0 && gameBoard[i - 1][j] !== color));
}

function checkLeftDown(gameBoard, color, i, j) {
  let count = 0;
  let x = i;
  let y = j;
  while (true) {
    if (x >= gameBoard.length || y < 0 || gameBoard[x][y] !== color) {
      // 현재 위치가 게임보드를 벗어나거나 다른 돌이 올 경우 정지
      break;
    }

    if (gameBoard[x][y] === color) count += 1;

    x += 1;
    y -= 1;
  }

  return (
    count === 5 &&
    (j === gameBoard[i].length - 1 ||
      i === 0 ||
      gameBoard[i - 1][j + 1] !== color)
  );
}
