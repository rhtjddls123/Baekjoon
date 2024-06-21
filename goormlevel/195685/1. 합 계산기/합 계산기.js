// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
	여러 계산식을 입력받은 뒤 각각의 계산 결과를 모두 더해서 출력한다
	계산식은 정수 기호 정수 형태
	기호는 +,-,*,/ 사칙연산
	나눗셈 결과의 나머지는 버림
*/

const input = [];

rl.on("line", (x) => {
  input.push(x);
}).on("close", () => {
  const T = +input[0];
	const calculate = input.slice(1).map(v=>v.split(' '));

  solution(T, calculate);
});

function solution(T, calculate) {
	/*
		1. 배열을 순회하며 사칙연산을 해준다
		2. 사칙연산의 결과를 sum에 더해준다
			2-1. 나눗셈 계산시 trunc를 통해 정수부분만 남겨준다
	*/
	
	let sum = 0;
	
	for(let i=0; i<T; i+=1){
		const operator = calculate[i][1];
		
		if(operator === '+'){
			sum += Number(calculate[i][0]) + Number(calculate[i][2]);
		}
		if(operator === '-'){
			sum += Number(calculate[i][0]) - Number(calculate[i][2]);
		}
		if(operator === '*'){
			sum += Number(calculate[i][0]) * Number(calculate[i][2]);
		}
		if(operator === '/'){
			sum += Math.trunc(Number(calculate[i][0]) / Number(calculate[i][2]));
		}
	}
	
	console.log(sum);
}
