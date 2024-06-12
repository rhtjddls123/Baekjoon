const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(line.trim());
}).on('close', () => {
    const N = parseInt(input[0], 10);
    const stocks = [];

    for (let i = 1; i <= N; i++) {
        const [vi, wi] = input[i].split(' ').map(Number);
        const evalValue = Math.trunc(vi * wi * 10) / 10; // 소수점 아래 2째 자리에서 절삭
        stocks.push({ index: i, evalValue });
    }

    stocks.sort((a, b) => {
        if (b.evalValue === a.evalValue) {
            return a.index - b.index; // 평가 금액이 같은 경우, 회사 번호가 작은 순서로
        }
        return b.evalValue - a.evalValue; // 평가 금액이 큰 순서로
    });

    const result = stocks.map(stock => stock.index);
    console.log(result.join(' '));
});
