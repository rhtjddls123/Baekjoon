const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

/*
	N*N크기의 보드판
	각 칸에는 command방향으로 count칸만큼 이동하라는 명령어
	처음에는 보드판의 칸 중 하나에서 시작
	각 칸에 적힌대로 말을 이동, 만약 범위를 벗어나면 반대쪽 첫번째 칸으로 이동
	만약 한번이라도 방문한 칸을 다시 지나야 할 경우 종료
	시작칸을 포함하여 방문한 칸의 개수가 점수
*/

const input = [];

rl.on('line', (x) => {
	input.push(x);
}).on('close', ()=>{
	const N = +input[0];
	const goorm = input[1].split(' ').map(v=>+v);
	const player = input[2].split(' ').map(v=>+v);
	const board = input.slice(3).map(v=>v.split(' '));
	
	solution(N, goorm, player, board);
});

function solution(N, goorm, player, board){
	/*
		1. 구름이와 플레이어의 시작위치를 각각 game함수에 전달하여 스코어를 반환받음
	*/
	const goormScore = game(N, goorm[0]-1, goorm[1]-1, board);
	const playerScore = game(N, player[0]-1, player[1]-1, board);
	
	console.log(goormScore>playerScore ? `goorm ${goormScore}` : `player ${playerScore}`);
}

function game(N, X, Y, board){
	/*
		1. 시작위치의 방향과 칸수를 받아옴
		2. 해당위치로 한칸씩 이동하면서 배열에 표시를 해줌
		3. 만약 이전에 다녀간 곳을 다시 방문시 종료
	*/
	const gameboard = Array.from({length: N}, ()=>Array(N).fill(0));
	gameboard[X][Y] = 1;
	let run = true;
	let score = 1;
	while(run){
		const count = board[X][Y].slice(0, -1);
		const command = board[X][Y].at(-1);
		
		for(let i=0; i<count; i+=1){
			if(command==='U'){
				if(X===0) X=N-1; // 위로 못갈 경우 맨 아래로
				else X-=1;
			}
			if(command==='D'){
				if(X===N-1) X=0; // 아래로 못갈 경우 맨 위로
				else X+=1;
			}
			if(command==='L'){
				if(Y===0) Y=N-1; // 왼쪽으로 못갈 경우 맨 오른쪽으로
				else Y-=1;
			}
			if(command==='R'){
				if(Y===N-1) Y=0; // 오른쪽으로 못갈 경우 맨 왼쪽으로
				else Y+=1;
			}
			
			if(gameboard[X][Y]===1){
				//이미 방문했을 경우 종료
				run = false;
				break;
			}
			else{
				gameboard[X][Y]=1;
				score+=1;
			}
		}
	}
	
	return score;
}