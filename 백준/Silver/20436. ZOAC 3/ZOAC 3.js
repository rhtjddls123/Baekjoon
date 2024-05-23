const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const keyboard = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

const leftHand = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "a",
  "s",
  "d",
  "f",
  "g",
  "z",
  "x",
  "c",
  "v",
];

rl.on("line", (x) => {
  input.push(x);
}).on("close", () => {
  const left = findIdx(keyboard, input[0].split(" ")[0]); // 왼손 시작지점
  const right = findIdx(keyboard, input[0].split(" ")[1]); // 오른손 시작지점

  const str = input[1]; // 입력할 문자열
  solution(left, right, str);
});

function solution(left, right, str) {
  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (leftHand.includes(str[i])) {
      const { dis, cur } = distance(str[i], left);
      result += dis;
      left = cur;
    } else {
      const { dis, cur } = distance(str[i], right);
      result += dis;
      right = cur;
    }
  }

  console.log(result);
}

function distance(char, cur) {
  // 현재 위치에서 목표 위치까지의 거리 + 누르기를 반환하는 함수
  const dest = findIdx(keyboard, char); // 목적지의 위치
  if (dest[0] === cur[0] && dest[1] === cur[1]) {
    // 현재 위치가 목적지라면 1과 현재 위치 반환
    return { dis: 1, cur: cur };
  }

  // 구한 거리에 누르는데 필요한 시간까지 +1하여 거리와 현재 위치 반환
  return {
    dis: Math.abs(cur[0] - dest[0]) + Math.abs(cur[1] - dest[1]) + 1,
    cur: dest,
  };
}

function findIdx(arr, x) {
  // x의 좌표를 찾아주는 함수
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === x) return [i, j];
    }
  }
}
