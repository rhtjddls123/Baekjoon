// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const input = []

rl.on('line',(x)=>{
	input.push(x);
}).on('close',()=>{
	const N = +input[0];
	const round = Array.from({length:N}, ()=>new Array());
	for(let i=0; i<N; i+=1){
		for(let j=i; j<i+2; j+=1){
			round[i].push(input[i+j+1].split(' ').map(v=>+v).slice(1));
		}
	}
	
	solution(N, round);
})

function solution(N, round){
	// object에 각 숫자별 개수를 저장하고 4부터 개수를 비교
	for(let i=0; i<N; i+=1){
		const objA = {4:0, 3:0, 2:0, 1:0};
		const objB = {4:0, 3:0, 2:0, 1:0};
		for(const num of round[i][0]){
				objA[num] += 1;
		}
		for(const num of round[i][1]){
				objB[num] += 1;
		}
		
		let result = 'D';
		for(let i=4; i>0; i-=1){
			// 4부터 개수 비교
			if(objA[i]>objB[i]){
				result = 'A';
				break;
			}
			if(objA[i]<objB[i]){
				result = 'B';
				break;
			}
		}
		console.log(result)
	}
	console.log()
}