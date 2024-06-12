const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input=[];
rl.on('line', (x) => {
	input.push(x);
}).on('close', ()=>{
	const N = +input[0].split(' ')[0];
	const K = +input[0].split(' ')[1];
	const map = []; // 정사각형 모양의 땅
	const boom = []; // 폭탄이 떨어질 위치
	for(let i=1; i<N+1; i+=1){
		map.push(input[i].split(' '));
	}
	for(let i=N+1; i<input.length; i+=1){
		boom.push(input[i].split(' ').map(v=>+v))
	}
	solution(N, map, boom);
})
/*
1. 폭탄 떨어지는 위치의 기호를 보고 증가
2. 폭탄 떨어지는 위치의 상하좌우를 보고 증가
#:0, 0:1, @:2
*/
function solution(N, map, boom){
	const dict = {'#':0, '0':1, '@':2}; // 각 기호별 점수
	const score = Array.from({length: N}, ()=>new Array(N).fill(0));
	
	for(let i=0; i<boom.length; i+=1){
		const r = boom[i][0]-1;
		const c = boom[i][1]-1;
		
		score[r][c] += dict[map[r][c]]; // 현재 위치 점수 증가
		if(r>0) score[r-1][c] += dict[map[r-1][c]]; // 아래쪽 점수 증가
		if(r<N-1) score[r+1][c] += dict[map[r+1][c]]; // 위쪽 점수 증가
		if(c>0) score[r][c-1] += dict[map[r][c-1]]; // 왼쪽 점수 증가
		if(c<N-1) score[r][c+1] += dict[map[r][c+1]]; // 오른쪽 점수 증가
	}
	
	let max = -Infinity;
	for(let i=0; i<N; i+=1){
		for(let j=0; j<N; j+=1){
			if(score[i][j]>max) max=score[i][j];
		}
	}
	
	console.log(max);
}