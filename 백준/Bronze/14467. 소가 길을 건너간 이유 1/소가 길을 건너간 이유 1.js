const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let N = 0;
const cow = {};

rl.on("line", (x) => {
  count += 1;

  if (count === 1) {
    N = +x;
  }

  if (count > 1) {
    const cowNum = x.split(" ")[0];
    const cowPosition = x.split(" ")[1];

    if (!cow[cowNum]) {
      cow[cowNum] = { position: cowPosition, count: 0 };
    } else {
      if (cow[cowNum]["position"] !== cowPosition) {
        cow[cowNum]["count"] += 1;
        cow[cowNum]["position"] = cowPosition;
      }
    }
  }
  if (count > N) {
    rl.close();
  }
}).on("close", () => {
  const values = Object.values(cow);
  let result = 0;
  for (const i of values) {
    result += i["count"];
  }
  console.log(result);
});
