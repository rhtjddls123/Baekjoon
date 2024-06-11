// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on("line", function(x) {
	input.push(x);
}).on("close", function() {
	const N = +input[0];
	const A = input[1].split(' ').map(v=>+v);
	const B = input[2].split(' ').map(v=>+v);
	const K = +input[3];
	
	solution(N,A,B,K);
});

function solution(N,A,B,K){
	for(let i=0; i<K; i+=1){
		// K번 증가
		for(let j=N-1; j>=0; j-=1){
			B[j]+=1;
			
			if(B[j]>A[j]){
				// 범위를 벗어났다면 0으로 한 뒤 왼쪽으로 반복
				B[j]=0;
			}
			else{
				// 범위 내에 있다면 해당 반복 종료
				break;
			}
		}
	}
	console.log(B.join(''))
}