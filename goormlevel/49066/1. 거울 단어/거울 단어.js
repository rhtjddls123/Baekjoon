// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on('line',(x)=>{
	input.push(x);
}).on('close',()=>{
	const N = +input[0];
	const words = input.slice(1);
	
	solution(N, words);
});

function solution(N, words){
	/*
		1. 거울단어에 매치 되는것을 object로 정의해두기
		2. 양쪽 끝에서 시작하여 만날때까지 양끝이 서로의 거울단어인지 확인
		3. 만약 단어의 길이가 홀수일경우 중앙에 있는 단어가 i,l,m,n,o,u,v,w,x일 경우는 거울단어
		4. 모두 거울단어라면 Mirror, 아니라면 Normal
	*/
	
	const mirrorWords = { b:'d', d:'b', i:'i', l:'l', m:'m', n:'n', o:'o', p:'q', q:'p', s:'z', z:'s', u:'u', v:'v', w:'w', x:'x' };
	const centerWord = ['i', 'l', 'm', 'n', 'o', 'u', 'v', 'w', 'x'];
	
	for(const word of words){
		
		let isMirror = true;
		let i=0; // 맨 앞부터 시작
		let j=word.length-1; // 맨 뒤부터 시작
		
		while(i<=j){
			
			const mirrorWord = mirrorWords[word[i]];
			
			if(i===j){
				// i와j가 만났을 경우(단어 길이가 홀수일 때 중앙에서 만났을 경우)
				isMirror = centerWord.includes(word[i]);
				break;
			}
			
			if(mirrorWord!==word[j]){
				// 양쪽 끝의 단어가 서로 거울단어가 아닐 경우
				isMirror = false;
				break;
			}
			
			i+=1;
			j-=1;
		}
		
		console.log(isMirror ? 'Mirror' : 'Normal');
	}
}