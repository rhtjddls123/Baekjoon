// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
	c+1초가 경과하면 모든 코드가 지워짐
	키보드를 총 N번 누른다고 할 때 코딩을 시작한 후 몇 초가 경과하고 키보드를 쳤는지에 대한
	N개의 정보를 이용하여 코딩을 마쳤을 때 남아있는 글자 수 계산
*/

const input = [];

rl.on("line", (x) => {
  input.push(x);
}).on("close", () => {
  const N = +input[0].split(" ")[0];
  const c = +input[0].split(" ")[1];
	const T = input[1].split(" ").map(v=>+v);
	
  solution(N, c, T);
});

function solution(N,c,T){
	/*
		c+1초가 지나면 글자수는 초기화된다
		1. 글자수의 합인 count는 0부터 시작한다
		2. 현재 시간인 curTime은 0부터 시작한다
		3. T배열을 순회하면서 count를 1증가시켜준다
		4. T[i]-curTime이 c보다 큰 경우 count는 1이 된다
			4-1. 배열을 순회할때마다 curTime은 T[i]가 된다
	*/
	
	let count = 0;
	let curTime = 0;
	for(let i=0; i<T.length; i+=1){
		count+=1;
		if(T[i]-curTime>c) count = 1;
		curTime = T[i]
	}
	
	console.log(count);
}