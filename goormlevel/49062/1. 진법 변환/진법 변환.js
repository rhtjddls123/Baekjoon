// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

/*
	10진법으로 표현된 정수 N을 r진법으로 변환한 결과 T가 주어질 때 r을 구하시오
*/

const input = [];

rl.on('line',(x)=>{
	input.push(x);
}).on('close',()=>{
	const N = +input[0].split(' ')[0];
	const T = input[0].split(' ')[1];
	solution(N,T);
})

function solution(N,T){
	/*
		1. T의 길이 n을 구한다
		2. T에는 10~15를 A~F로 표현하고 있기 때문에 object로 각 문자와 숫자를 매핑시켜준다
		3. r은 최대값이 16이므로 16부터 시작한다
			3-1. 만약 T의 길이가 1일 경우 r은 T+1로 시작한다
		4. 반복문을 돌며 sum에 r**(n-1) * T[i]를 해준 뒤 n-1을 해준다
		5. sum이 N보다 클 경우 반복을 멈추고 r-1을 해준다
		6. 반복이 종료된 후 N과sum이 같다면 현재의 r을 출력해준다
	*/
	let r = 16;
	const num = {0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, A:10, B:11, C:12, D:13, E:14, F:15};
	
	while(true){
		let n = T.length;	
		let sum = 0;
		if(n===1) r = num[T[0]]+1
		
		for(let i=0; i<T.length; i+=1){
			sum += r**(n-1) * num[T[i]];
			n-=1;
			if(sum>N){
				r-=1;
				break;
			}
		}
		
		if(N===sum){
			console.log(r);
			break;
		}

	}
}
