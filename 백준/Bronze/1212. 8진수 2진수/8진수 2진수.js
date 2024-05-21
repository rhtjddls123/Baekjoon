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

  let point = 0;
  for (let i = 0; i < result.length; i += 1) {
    if (result[i] !== "0") {
      point = i;
      break;
    }
  }

  result = result.slice(point);
  if (result === "000") result = "0";
  return result;
}