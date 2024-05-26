const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (x) => {
  input.push(x);
}).on("close", () => {
  const T = +input[0];
  let pre = 0;
  for (let i = 0; i < T; i += 1) {
    const n = +input[i + 1 + pre].split(" ")[0];
    const d = input[i + 1 + pre].split(" ")[1];
    const arr = [];

    for (let j = 0; j < n; j += 1) {
      arr.push(input[j + i + 2 + pre].split(" "));
    }

    solution(arr, n, d);
    pre += n;
  }
});

function solution(arr, n, d) {
  const count = Math.abs(d / 45);

  for (let i = 0; i < count; i += 1) {
    const tmp = Array.from({ length: n }, () => Array(n).fill(0));
    moveCol(arr, tmp, n, d);
    moveRow(arr, tmp, n, d);
    moveMainDiagonal(arr, tmp, n, d);
    moveSubDiagonal(arr, tmp, n, d);

    fillZero(arr, tmp, n);
    arr = tmp;
  }

  let result = "";
  for (let i = 0; i < arr.length; i += 1) {
    result += arr[i].join(" ");
    if (i < n - 1) result += "\n";
  }
  console.log(result);
}

function moveCol(arr, tmp, n, d) {
  if (d > 0) {
    // 45도각도로 +방향으로 1번 움직일 때 가운데열 움직임
    for (let i = 0; i < n; i += 1) {
      tmp[i][n - i - 1] = arr[i][(n + 1) / 2 - 1];
    }
  }

  if (d < 0) {
    // 45도각도로 -방향으로 1번 움직일 때 가운데열 움직임
    for (let i = 0; i < n; i += 1) {
      tmp[i][i] = arr[i][(n + 1) / 2 - 1];
    }
  }
}

function moveRow(arr, tmp, n, d) {
  if (d > 0) {
    // 45도각도로 +방향으로 1번 움직일 때 가운데행 움직임
    for (let i = 0; i < n; i += 1) {
      tmp[i][i] = arr[(n + 1) / 2 - 1][i];
    }
  }

  if (d < 0) {
    // 45도각도로 -방향으로 1번 움직일 때 가운데행 움직임
    for (let i = 0; i < n; i += 1) {
      tmp[n - i - 1][i] = arr[(n + 1) / 2 - 1][i];
    }
  }
}

function moveMainDiagonal(arr, tmp, n, d) {
  if (d > 0) {
    // 45도각도로 +방향으로 1번 움직일 때 메인 대각선 움직임
    for (let i = 0; i < n; i += 1) {
      tmp[i][(n + 1) / 2 - 1] = arr[i][i];
    }
  }

  if (d < 0) {
    // 45도각도로 -방향으로 1번 움직일 때 메인 대각선 움직임
    for (let i = 0; i < n; i += 1) {
      tmp[(n + 1) / 2 - 1][i] = arr[i][i];
    }
  }
}

function moveSubDiagonal(arr, tmp, n, d) {
  if (d > 0) {
    // 45도각도로 +방향으로 1번 움직일 때 서브 대각선 움직임
    for (let i = 0; i < n; i += 1) {
      tmp[(n + 1) / 2 - 1][i] = arr[n - i - 1][i];
    }
  }

  if (d < 0) {
    // 45도각도로 -방향으로 1번 움직일 때 서브 대각선 움직임
    for (let i = 0; i < n; i += 1) {
      tmp[i][(n + 1) / 2 - 1] = arr[i][n - i - 1];
    }
  }
}

function fillZero(arr, tmp, n) {
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (tmp[i][j] === 0) {
        tmp[i][j] = arr[i][j];
      }
    }
  }
}
