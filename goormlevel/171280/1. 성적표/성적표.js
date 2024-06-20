// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (x) => {
  input.push(x);
}).on("close", () => {
  /*
		M개 과목 수강
		과목은 1~M까지
		가장 성적이 좋은 과목 확인하려함
		가장 성적이 좋은 과목은 시험 성적의 평균이 제일 좋은 과목
		N개 시험 응시, 성적은 과목번호 ci, 시험성적 si 이걸로 평균 계산
		어떤 과목 시험 아예 안보는 경우도 존재
		가장 좋은 평균 점수를 가진 과목 번호 출력, 평균 같으면 과목번호가 더 작은거
	*/
  const N = +input[0].split(" ")[0];
  const M = +input[0].split(" ")[1];
  const subject = input.slice(1).map((v) => v.split(" ").map((v) => +v));

  solution(N, M, subject);
});

function solution(N, M, subject) {
  /*
    배열을 돌면서 0번째 index인 과목번호의 1번째 index인 성적을 [과목번호, 평균, 응시자수]에서 평균에 더해줌
    그렇게 만들어진 배열을 평균 내림차순, 과목 오름차순으로 정렬
    맨 앞에꺼 출력
  */

  const result = Array.from({ length: M }, () => Array(3).fill(0));
  for (let i = 0; i < N; i += 1) {
    const subjectNum = subject[i][0] - 1; // 배열은 0부터 시작하기 때문에 하나를 줄임
    const subjectScore = subject[i][1];

    result[subjectNum][0] = subjectNum + 1;
    result[subjectNum][1] += subjectScore;
    result[subjectNum][2] += 1;
  }

  for (let i = 0; i < M; i += 1) {
    if (result[i][0] !== 0) result[i][1] = result[i][1] / result[i][2]; // 한 명이라도 수강한 과목의 평균점수
  }

  result.sort((a, b) => {
    // 점수 내림차순, 같다면 과목 오름차순 정렬
    if (b[1] !== a[1]) return b[1] - a[1];
    else return a[0] - b[0];
  });
  console.log(result[0][0]);
}
