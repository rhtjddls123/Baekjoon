// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on('line',(x)=>{
	input.push(x);
}).on('close',()=>{
	const N = +input[0];
	
	solution(N);
})

function solution(N){
	let A = factorial(N).toString();
	while(A.length>1){
		let B = 0;
		for(let i=0; i<A.length; i+=1){
			const num = +A[i];
			B += num;
		}
		A = B.toString();
	}
	
	console.log(A);
}

function factorial(n){
	if (n===0) return 1;
	
	let fac = BigInt(1);
	for(let i=BigInt(1); i<=n; i+=BigInt(1)){
			fac *= i;
	}
	
	return fac;
}