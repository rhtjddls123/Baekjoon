// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
	G세포는 1분에 2배씩 커짐
	다른 G세포와 만나면 합쳐짐
	크기가 N인 G세포가 필요
	크기가 1인 G세포 여러 개를 적절히 분열과 합체시켜 크기가 N인 G세포를 만드려한다
	이 때 크기가 1인 G세포 최소 몇 개 필요한지, 분열시간 출력
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
		1. G세포는 시간이 n일 때 2**n 이다.
		2. N보다 작으면서 가장 큰 2**n 값을 구한다.
		3. 해당 값을 배열에 저장 후 N에서 빼준 뒤 반복한다.
		4. 각 반복마다 count를 1씩 더해준다.
	*/
	
	const time = [];
	let count = 0;
	
	while(true){
		count += 1;
		let n = 0;
		
		while(true){
			let tmp = 2 ** n;
			if(tmp>N){
				time.push(n-1);
				break;
			}
			n+=1;
		}
		
		N -= 2 ** (n-1);
		if(N===0){
			break;
		}
	}
	
	console.log(count);
	time.sort((a,b)=>a-b);
	console.log(time.join(' '));
}
