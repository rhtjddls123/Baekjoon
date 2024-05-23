const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (x) => {
  input.push(x);
}).on("close", () => {
  const switchCount = +input[0];
  const switchs = input[1].split(" ");
  const studentCount = +input[2];
  const student = input.slice(3).map((val) => val.split(" "));

  solution(switchCount, switchs, student);
});

function solution(switchCount, switchs, student) {
  for (let i = 0; i < student.length; i += 1) {
    if (student[i][0] === "1") {
      // 들어온 학생이 남자일때
      switchs = man(switchCount, switchs, +student[i][1]);
      continue;
    }
    if (student[i][0] === "2") {
      // 들어온 학생이 여자일때
      switchs = woman(switchCount, switchs, +student[i][1]);
      continue;
    }
  }

  for (let i = 0; i < switchs.length; i += 1) {
    // 출력 형식을 맞추기 위해 20개 단위로 줄바꿈을 해줌
    if (i % 20 === 0 && i !== 0) console.log("");

    // process.stdout.write를 통해 줄바꿈을 하지 않고 출력
    process.stdout.write(switchs[i] + " ");
  }
}

function man(switchCount, switchs, num) {
  const mul = Array.from(
    { length: parseInt(switchCount / num) },
    (v, i) => num * (i + 1)
  ); // num값의 배수들로 이루어진 배열 생성

  for (const n of mul) {
    // 해당하는 스위치 상태를 변경
    // array의 index는 0부터 시작하기 때문에 1을 빼줌
    switchs[n - 1] = reverseSwitch(switchs[n - 1]);
  }

  return switchs;
}

function woman(switchCount, switchs, num) {
  num -= 1; // array의 index는 0부터 시작하기 때문에 1을 빼줌
  let left = num - 1; // 기준의 왼쪽을 확인
  let right = num + 1; // 기준의 오른쪽을 확인

  while (true) {
    if (switchs[left] !== switchs[right] || left < 0 || right >= switchCount) {
      // 종료 조건

      // 왼쪽이나 오른쪽에 더 이상 스위치가 없으면
      // 기준점으로부터 대칭되는 부분이 다를 시

      // 해당 부분의 이전으로 설정 후 종료

      left += 1;
      right -= 1;
      break;
    }

    // 다음 요소를 확인하기 위해 증감
    left -= 1;
    right += 1;
  }

  for (let i = left; i <= right; i += 1) {
    // left부터 right까지
    switchs[i] = reverseSwitch(switchs[i]);
  }

  return switchs;
}

function reverseSwitch(cur) {
  if (cur === "0") return "1";
  if (cur === "1") return "0";
}
