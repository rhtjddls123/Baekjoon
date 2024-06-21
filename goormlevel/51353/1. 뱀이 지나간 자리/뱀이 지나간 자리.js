// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
	N*M 배열이 있다
	뱀은 0,0에서 오른쪽으로 움직이고 M까지 가면 2만큼 아래로 내려감
	그 다음 왼쪽으로 움직이고 0까지 가면 2만큼 내려가고 다시 오른쪽으로 감
	더 갈 수 없을때까지 반복
	이동한 자리를 표시
*/

const input = [];

rl.on("line", (x) => {
  input.push(x);
}).on("close", () => {
  const N = +input[0].split(" ")[0];
  const M = +input[0].split(" ")[1];

  solution(N,M);
});

function solution(N,M) {
	/*
		1. N*M크기의 배열을 만들면서 .으로 초기화
		2. 0,0에서 시작하여 M까지 이동한 부분을 #으로 바꿔줌
		3. 0에서 출발시 오른쪽, M에서 출발시 왼쪽으로
		4. 끝까지 갈때마다 2칸 내려가는데 더 갈 수 없으면 종료
	*/
	
	const road = Array.from({length: N}, ()=>Array(M).fill('.'));
	let cur = [0,0];
	let dist = 1;
	
	while(true){
		road[cur[0]][cur[1]] = '#';
		cur[1] += dist;
		
		if(cur[1]===M && dist===1){
			cur[1] = M-1;
			cur[0] += 2
			dist = -1
			if(cur[0]>N) break;
			road[cur[0]-1][cur[1]] = '#'
		}
		
		if(cur[1]===-1 && dist===-1){
			cur[1] = 0;
			cur[0] += 2
			dist = 1
			if(cur[0]>N) break;
			road[cur[0]-1][cur[1]] = '#'
		}
		
		if(cur[0]>=N) break;
	}
	
	let result = '';
	for(const i of road){
		result += i.join('')+'\n'
	}
	console.log(result)
}
