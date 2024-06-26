const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (x) => {
  input.push(x);
}).on('close', () => {
  const A = input[0].split(' ')[0];
  const B = input[0].split(' ')[1];

  solution(A, B);
});

function solution(A, B) {
  const resultA = calculate(A);
  const resultB = calculate(B);

  console.log(resultA > resultB ? resultA : resultB);
}

function calculate(formula) {
  let cal = [];
  let c = "";
  for (let i = 0; i < formula.length; i += 1) {
    if (formula[i] !== '+' && formula[i] !== '-' && formula[i] !== '*') {
      c += formula[i];
    } else {
      cal.push(c);
      cal.push(formula[i]);
      c = "";
    }
  }
  cal.push(c);

  cal = calc(cal, '*');
	
	while(cal.length>1){
		if(cal[1]==='+'){
			cal[1] = Number(cal[0]) + Number(cal[2]);
		}
		if(cal[1]==='-'){
			cal[1] = Number(cal[0]) - Number(cal[2]);
		}
		
		cal[0] = null;
		cal[2] = null;
		cal = cal.filter(v=>v!==null);
	}
	
  return cal[0];
}

function calc(formula, oper) {
  while (true) {
    const f = formula.findIndex(v => v === oper);

    if (f === -1) {
      break;
    }

    let left = Number(formula[f - 1]);
    let right = Number(formula[f + 1]);

    formula[f] = left * right;
    formula[f - 1] = null;
    formula[f + 1] = null;

    formula = formula.filter(v => v !== null);
  }

  return formula;
}
