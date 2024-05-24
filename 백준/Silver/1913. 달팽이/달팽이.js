const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const find = +input[1];

solution(N, find);

function solution(N, find) {
  const numArr = Array.from({ length: N }, () => Array(N).fill(0));
  let x = 0,
    y = 0;
  let value = N * N;

  // Directions: down, right, up, left
  const directions = [
    [1, 0], // down
    [0, 1], // right
    [-1, 0], // up
    [0, -1], // left
  ];
  let dir = 0; // start with the "down" direction

  while (value > 0) {
    numArr[x][y] = value;
    if (value === find) {
      findX = x + 1;
      findY = y + 1;
    }
    value--;

    const [dx, dy] = directions[dir];
    const nextX = x + dx;
    const nextY = y + dy;

    if (
      nextX < 0 ||
      nextX >= N ||
      nextY < 0 ||
      nextY >= N ||
      numArr[nextX][nextY] !== 0
    ) {
      dir = (dir + 1) % 4; // change direction
    }
    x += directions[dir][0];
    y += directions[dir][1];
  }

  for (const row of numArr) {
    console.log(row.join(" "));
  }

  console.log(findX, findY);
}
