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
	const N = +input[0].split(' ')[0];
	const M = +input[0].split(' ')[1];
	const ground = input[1].split(' ').map(v=>+v)
	const jangma = [];
	
	for(let i=2; i<M+2; i+=1){
		jangma.push(input[i].split(' ').map(v=>+v))
	}
	solution(N, M, ground, jangma)
});

function solution(N, M, ground, jangma){
	const rainGround = new Set([])
	for(let i=0; i<M; i+=1){
		for(let j=jangma[i][0]-1; j<jangma[i][1]; j+=1){
			// 비가 오는 땅 +1
			ground[j]+=1;
			rainGround.add(j);
		}
		if((i+1)%3===0){
			// 3번째 날마다
			for(const baesu of rainGround){
				// 3일이내 비왔던곳 배수시스템 작동
				ground[baesu]-=1;
			}
			rainGround.clear(); // 비 왔던 곳 초기화
		}
	}
	console.log(ground.join(' '))
}