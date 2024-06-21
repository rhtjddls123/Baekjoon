// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

/*
	가계부를 작성하려한다
	처음 갖고있는 돈은 0원
	항상 0원 이상의 돈을 가지고 있어야 절약 성공
	만약 0보다 적어질 경우가 있다면 무조건 실패
	입력 0번 index는 수입인지 지출인지, 1번 index는 금액
*/

const input = [];

rl.on('line',(x)=>{
	input.push(x);
}).on('close',()=>{
	const N = +input[0];
	const tradeLog = input.slice(1).map(v=>v.split(' '));
	
	solution(N, tradeLog);
});

function solution(N, tradeLog){
	/*
		1. 배열을 순회하며 0번 index가 in이면 총 금액에 +, out이면 -를 해준다
		2. 매 반복마다 총 금액이 0이상인지 확인한다
		3. 0보다 작아질 경우 success에 false를 저장 후 반복을 멈춘다
		4. 결과를 출력한다.
	*/
	let money = 0;
	let success = true;
	
	for(const log of tradeLog){
		// 총 금액에 +또는 -를 해줌
		if(log[0]==='in'){
			money += Number(log[1]);
		}
		else{
			money -= Number(log[1]);
		}
		
		if(money<0){
			// 만약 돈이 0보다 작아질 경우
			success = false;
			break;
		}
	}
	
	console.log(success ? 'success' : 'fail');
}