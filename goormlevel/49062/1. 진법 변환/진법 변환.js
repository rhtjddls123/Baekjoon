// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

/*
	10진법으로 표현된 정수 N을 r진법으로 변환한 결과 T가 주어질 때 r을 구하시오
*/

const input = [];

rl.on('line',(x)=>{
	input.push(x);
}).on('close',()=>{
	const N = +input[0].split(' ')[0];
	const T = input[0].split(' ')[1];
	solution(N,T);
})

function solution(N,T){
	/*
		1. T의 길이 n을 구한다
		2. r은 T배열에서 가장 큰 숫자부터 시작한다
		3. 끝까지 반복하면서 더해주는데, 더해준 숫자가 N과 다를 시 r+1을 해준다
		4. 끝까지 반복했을 때 N과 같아지면 중단한다
	*/
	let r = 16;
	const num = {0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, A:10, B:11, C:12, D:13, E:14, F:15};
	
	while(true){
		let n = T.length;	
		let sum = 0;
		if(n===1) r = num[T[0]]+1
		
		for(let i=0; i<T.length; i+=1){
			sum += r**(n-1) * num[T[i]];
			n-=1;
			if(sum>N){
				r-=1;
				break;
			}
		}
		
		if(N===sum){
			console.log(r);
			break;
		}

	}
}
