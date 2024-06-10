// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on("line",(x)=>{
	input.push(x);
}).on("close",()=>{
	const saltWater = +input[0].split(' ')[0];
	const addWater = +input[0].split(' ')[1];
	
	solution(saltWater, addWater);
})

function solution(saltWater, addWater){
	// (saltWater * 0.07 * 100) / (saltWater + addWater)
	// (saltWater * 7) / (saltWater + addWater)
	
	const salt = saltWater * 0.07;
	const totalWater = saltWater + addWater;
	const nongdo = 100*(salt/totalWater);
	console.log(fixed(nongdo));
}

function fixed(num){
	// 소수점 2번째 아래 버리는 함수
	// Math.trunc()를 사용하는데, 받은 숫자에 100을 곱해 소수점 아래를 버려준 뒤 
	// 다시 100으로 나눠 2번째자리까지만 오게 만듦, 만약 소수점 2째자리가 없으면 0 붙여줌
	num = ''+Math.trunc(num*100)/100; // string으로 만들어줌
	const fix = num.split('.'); // 소수점 숫자
	if(fix.length===1){
		// 소수점 아래가 없을 때
		num = num+'.00';
	}
	if(fix.length===2 && fix[1].length===1){
		// 소수점 아래가 1자리밖에 없으면 0 붙여줌
		num = num+'0';
	}
	return num;
}