const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result;

rl.on("line", (x) => {
  const year = Number(x);
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    result = 1;
  } else result = 0;
  rl.close();
}).on("close", () => {
  console.log(result);
});