// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

/*
	모음만 출력하기
	aeiou 대소문자를 구분함
*/

const input = [];

rl.on('line',(x)=>{
	input.push(x);
}).on('close',()=>{
	const N = +input[0].split(' ')[0];
	const sentence = input.slice(1);
	solution(N,sentence);
})

function solution(N,sentence){
	/*
		1. 모음 aeiouAEIOU이 들어있는 배열을 만든다
		2. 문장을 순회하며 배열에 들어있는 글자를 sound 배열에 넣는다
		3. sound배열을 출력한다
			3-1. 만약 sound배열의 길이가 0일 경우 ???를 출력한다
	*/
	
	const gather = ['a','e','i','o','u','A','E','I','O','U'];
	
	for(const s of sentence){
		const sound = [];
		for(let i=0; i<s.length; i+=1){
			if(gather.includes(s[i])){
				sound.push(s[i]);
			}
		}
		
		console.log(sound.length===0 ? '???' : sound.join(''));
	}
}