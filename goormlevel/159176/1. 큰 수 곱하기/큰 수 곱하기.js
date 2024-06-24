// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on('line', (x)=>{
	input.push(x);
}).on('close', ()=>{
	const num = input[0].split(' ').map(v=>+v);
	
	solution(num);
});

function solution(num){
	/*
		num에는 100이 10개 들어있는 배열이 들어온다
		해당 숫자를 모두 곱한 수를 출력
	*/
	
	let sum = 1;
	for(const n of num){
		sum*=n;
	}
	console.log(sum);
}