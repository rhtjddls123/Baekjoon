const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const octaBinary = {
  0: "000",
  1: "001",
  2: "010",
  3: "011",
  4: "100",
  5: "101",
  6: "110",
  7: "111",
};

rl.on("line", (x) => {
  const binary = octaToBinary(x);
  console.log(binary);
  rl.close();
});

function octaToBinary(num) {
  let result = "";
  for (let i = 0; i < num.length; i += 1) {
    result += octaBinary[num[i]];
  }
  result = result.replace(/^0+/, '');
  if (result === "") {
    return "0";
  }
  return result;
}
