// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
	달구와 포닉스는 0점을 갖고 시작함
	N회의 라운드로 각 라운드 승자가 1점 얻음
	N회가 종료되거나 달구, 포닉스 중 아무나 2점 앞서면 종료
	몇대몇으로 끝나는지 구하시오
*/

const input = [];

rl.on("line", (x) => {
  input.push(x);
}).on("close", () => {
  const N = +input[0];
  const round = input.slice(1);

  solution(N, round);
});

function solution(N, round){
	/*
		1. 달구의 점수 X, 포닉스의 점수 Y는 0에서 시작
		2. round배열을 순회하며 D가 올 경우 X+1, P가 올 경우 Y+1을 해줌
		3. 만약 X와Y의 차이가 2이상일 경우 종료
		4. 종료된 후 X:Y출력
	*/
	
	let X = 0;
	let Y = 0;
	
	for(let i=0; i<N; i+=1){
		if(round[i]==='D') X+=1;
		if(round[i]==='P') Y+=1;
		
		if(Math.abs(X-Y)>=2){
			break;
		}
	}
	
	console.log(`${X}:${Y}`);
}