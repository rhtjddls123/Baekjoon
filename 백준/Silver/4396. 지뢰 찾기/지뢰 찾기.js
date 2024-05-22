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
  const map = input.slice(1, n + 1);
  const playMap = [];
  for (let i = n + 1; i < input.length; i += 1) {
    const line = [];
    for (let j = 0; j < input[i].length; j += 1) {
      line.push(input[i][j]);
    }
    playMap.push(line);
  }
  solution(n, map, playMap);
});

/*
  1. 플레이어가 다녀간 곳의 좌표 확인
  2. 해당 좌표의 상하좌우 대각선에 폭탄이 몇개인지 확인
  2-1. 해당 좌표가 맵의 테두리부분에 있을 시 예외처리해야함
  2-2. x좌표가 0일 경우 위, 아래, 오른쪽, 오른쪽아래, 오른쪽위 확인
  2-3. y좌표가 0일 경우 왼쪽, 아래, 오른쪽, 왼쪽아래, 오른쪽아래 확인

  2-4. x좌표가 n-1(오른쪽 끝)일 경우 위, 왼쪽, 아래, 왼쪽위, 왼쪽아래 확인
  2-5. y좌표가 n-1(아래쪽 끝)일 경우 왼쪽, 위, 오른쪽, 왼쪽위, 오른쪽위 확인

  2-6. x,y좌표가 0(왼쪽 위 끝)일 경우 오른쪽, 오른쪽아래, 아래 확인
  2-7. x,y좌표가 n-1(오른쪽 아래 끝)일 경우 위, 왼쪽, 왼쪽위 확인
  2-8. x,y좌표가 n-1, 0(오른쪽 위 끝)일 경우 왼쪽, 왼쪽아래, 아래 확인
  2-9. x,y좌표가 0, n-1(왼쪽 아래 끝)일 경우 위, 오른쪽위, 오른쪽 확인
*/

function solution(n, map, playMap) {
  let isBomb = false;
  for (let i = 0; i < playMap.length; i += 1) {
    for (let j = 0; j < playMap[i].length; j += 1) {
      if (playMap[i][j] === "x" && map[i][j] === "*") {
        // 플레이어가 누른곳이 폭탄일시 폭발
        isBomb = true;
      }
      if (playMap[i][j] === "x" && map[i][j] !== "*") {
        // 플레이어가 다녀간 곳만(버튼이 눌린곳만) && 해당장소가 폭탄이 아닐시
        playMap[i][j] = bombCheck(n, i, j, map);
      }
    }
  }

  for (let i = 0; i < playMap.length; i += 1) {
    let str = "";
    for (let j = 0; j < playMap[i].length; j += 1) {
      if (isBomb) {
        str += map[i][j] === "*" ? "*" : playMap[i][j];
      } else {
        str += playMap[i][j];
      }
    }
    console.log(str);
  }
}

// 오른쪽: x+1, 왼쪽: x-1, 위: y-1, 아래: y+1
// 오른쪽위: x+1, y-1, 오른쪽아래: x+1, y+1, 왼쪽위: x-1, y-1, 왼쪽아래: x-1, y+1

function bombCheck(n, x, y, map) {
  const count =
    up(map, x, y) +
    down(map, x, y, n) +
    left(map, x, y) +
    right(map, x, y, n) +
    leftUp(map, x, y) +
    leftDown(map, x, y, n) +
    rightUp(map, x, y, n) +
    rightDown(map, x, y, n);
  return count;
}

// 오른쪽: x+1, 왼쪽: x-1, 위: y-1, 아래: y+1
// 오른쪽위: x+1, y-1, 오른쪽아래: x+1, y+1, 왼쪽위: x-1, y-1, 왼쪽아래: x-1, y+1

function up(map, x, y) {
  if (y > 0) {
    return map[x][y - 1] === "*" ? 1 : 0;
  }
  return 0;
}
function down(map, x, y, n) {
  if (y < n - 1) {
    return map[x][y + 1] === "*" ? 1 : 0;
  }
  return 0;
}
function left(map, x, y) {
  if (x > 0) {
    return map[x - 1][y] === "*" ? 1 : 0;
  }
  return 0;
}
function right(map, x, y, n) {
  if (x < n - 1) {
    return map[x + 1][y] === "*" ? 1 : 0;
  }
  return 0;
}
function leftUp(map, x, y) {
  if (x > 0 && y > 0) {
    return map[x - 1][y - 1] === "*" ? 1 : 0;
  }
  return 0;
}
function leftDown(map, x, y, n) {
  if (x > 0 && y < n - 1) {
    return map[x - 1][y + 1] === "*" ? 1 : 0;
  }
  return 0;
}
function rightUp(map, x, y, n) {
  if (x < n - 1 && y > 0) {
    return map[x + 1][y - 1] === "*" ? 1 : 0;
  }
  return 0;
}
function rightDown(map, x, y, n) {
  if (x < n - 1 && y < n - 1) {
    return map[x + 1][y + 1] === "*" ? 1 : 0;
  }
  return 0;
}
