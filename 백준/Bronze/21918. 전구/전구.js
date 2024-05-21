const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (x) => {
  input.push(x);
}).on("close", () => {
  const commandCount = +input[0].split(" ")[1];
  let light = input[1].split(" ").map((el) => parseInt(el));

  for (let i = 0; i < commandCount; i += 1) {
    const line = input[i + 2].split(" ");
    const command = +line[0];
    const l = +line[1];
    const r = +line[2];
    light = commandManage(light, command, l, r);
  }

  result = "";
  for (let i = 0; i < light.length; i += 1) {
    result += light[i] + " ";
  }
  console.log(result);
});

function commandManage(light, commandNum, l, r) {
  if (commandNum === 1) {
    firstCommand(light, l, r);
    return light;
  }
  if (commandNum === 2) {
    secondCommand(light, l, r);
    return light;
  }
  if (commandNum === 3) {
    thirdCommand(light, l, r);
    return light;
  }
  if (commandNum === 4) {
    fourthCommand(light, l, r);
    return light;
  }
}
function firstCommand(light, i, x) {
  return (light[i - 1] = x);
}
function secondCommand(light, l, r) {
  for (let i = l; i <= r; i += 1) {
    light[i - 1] = light[i - 1] === 1 ? 0 : 1;
  }
  return light;
}
function thirdCommand(light, l, r) {
  for (let i = l; i <= r; i += 1) {
    light[i - 1] = 0;
  }
  return light;
}
function fourthCommand(light, l, r) {
  for (let i = l; i <= r; i += 1) {
    light[i - 1] = 1;
  }
  return light;
}
