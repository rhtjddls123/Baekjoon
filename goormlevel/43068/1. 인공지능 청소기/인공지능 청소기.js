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
	const T = +input[0];
	const inputCase = [];
	for(let i=0; i<T; i+=1){
		inputCase.push(input[i+1].split(' ').map(v=>+v));
	}
	
	solution(inputCase)
});

function solution(inputCase){
	// 최단거리로 갔을 때 시간이랑 같다면 종료
	// 최단거리를 찾은 다음 남은 시간이 짝수면 YES, 홀수면 NO
	for(const line of inputCase){
		const dir = Math.abs(line[0])+Math.abs(line[1]);
		if(dir===line[2]){
			console.log('YES');
			continue;
		}
		
		if(dir<line[2]&&(line[2]-dir)%2===0){
			console.log('YES');
		}
		else{
			console.log('NO');
		}
	}
	
}