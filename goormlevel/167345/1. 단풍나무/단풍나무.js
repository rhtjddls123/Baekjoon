// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = []

rl.on('line',(x)=>{
	input.push(x);
}).on('close',()=>{
	const N = +input[0];
	const tree = [];
	
	for(let i=1; i<=N; i+=1){
		tree.push(input[i].split(' ').map(v=>+v));
	}
	
	solution(N, tree);
})

function solution(N, tree){
	let result = 0;
	const tmp = [...tree].map(v=>[...v]);
	
	if(tree.length===1) {
		console.log(0);
		return;
	}
	while(true){
		let count = 0;
		for(let i=0; i<N; i+=1){
			for(let j=0; j<N; j+=1){
				const red = up(N, tree, i, j) + down(N, tree, i, j) + left(N, tree, i, j) + right(N, tree, i, j);
				tmp[i][j] = tmp[i][j]>=red ? tmp[i][j]-red : 0;
				
				if(tmp[i][j]===0) count+=1;
			}
		}
		tree = [...tmp].map(v=>[...v]);
		result+=1;
		if(count===N*N) break;
	}
	console.log(result);
}

function up(N, tree, i, j){
	if(i>0 && tree[i-1][j]===0) return 1;
	return 0;
}
function down(N, tree, i, j){
	if(i<N-1 && tree[i+1][j]===0) return 1;
	return 0;
}
function left(N, tree, i, j){
	if(j>0 && tree[i][j-1]===0) return 1;
	return 0;
}
function right(N, tree, i, j){
	if(j<N-1 && tree[i][j+1]===0) return 1;
	return 0;
}