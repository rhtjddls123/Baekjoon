// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
	헬로빗은 N명을 모아 엘리스 트랙에 지원하려 한다
	헬로빗과 같은 트랙에 지원하는 친구들은 몇명인지 출력하라
*/

const input = [];

rl.on("line", (x) => {
  input.push(x);
}).on("close", () => {
  const N = +input[0];
  const track = input[1].split(" ");
	const apply = input[2];

  solution(N, track, apply);
});

function solution(N, track, apply) {
	/*
		1. track배열을 순회하며 apply와 같은게 나오면 count를 1 증가시킨다
		2. count를 출력한다
	*/
	
	let count = 0;
	for(let i=0; i<N; i+=1){
		if(track[i]===apply) count+=1
	}
	console.log(count);
}
