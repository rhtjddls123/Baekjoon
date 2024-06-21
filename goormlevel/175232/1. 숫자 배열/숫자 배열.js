// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
	숫자 배열 한 변 크기는 N
	첫째줄 첫째칸에서 시작, 항상 1, 이동할때마다 1씩 추가
	시작위치에서 오른쪽으로 한 칸씩 이동
	오른쪽으로 N칸 이동했다면 다음줄로
*/

const input = [];

rl.on("line", (x) => {
  input.push(x);
}).on("close", () => {
  const N = +input[0];

  solution(N);
});

function solution(N) {
	/*
		1. N*N크기의 배열을 만들어준다
		2. 배열을 순회하며 1부터 1씩 증가해가며 배열을 채워준다
	*/
	const arr = Array.from({length: N}, ()=>new Array(N));
	
	let num = 1;
	for(let i=0; i<N; i+=1){
		for(let j=0; j<N; j+=1){
			arr[i][j] = num;
			num+=1;
		}
	}
	
	let result = '';
	for(const a of arr){
		result += a.join(' ')+'\n';
	}
	
	console.log(result);
}
