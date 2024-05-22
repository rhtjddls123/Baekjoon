const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let money = 0;
let stock;

rl.on("line", (x) => {
  count += 1;
  if (count === 1) {
    money = +x;
  }

  if (count > 1) {
    stock = x.split(" ");
    rl.close();
  }
}).on("close", () => {
  const junMoney = jun(money, stock);
  const seongMoney = seong(money, stock);

  if (junMoney > seongMoney) console.log("BNP");
  if (junMoney < seongMoney) console.log("TIMING");
  if (junMoney === seongMoney) console.log("SAMESAME");
});

function jun(money, stock) {
  const trade = { money: money, stockCount: 0 };
  for (let i = 0; i < stock.length; i += 1) {
    const stockPrice = +stock[i]; //현재 주가
    const stockCount = parseInt(trade["money"] / stockPrice);

    trade["money"] -= stockPrice * stockCount;
    trade["stockCount"] += stockCount;
  }
  // console.log(trade["stockCount"] * stock[stock.length - 1] + trade["money"]);
  return trade["stockCount"] * stock[stock.length - 1] + trade["money"];
}

function seong(money, stock) {
  const trade = { money: money, stockCount: 0 };
  const graph = { prePrice: +stock[0], up: 0, down: 0 };

  for (let i = 1; i < stock.length; i += 1) {
    const stockPrice = +stock[i]; //현재 주가
    if (graph["prePrice"] === stockPrice) {
      //가격 변동없음
      graph["up"] = 0;
      graph["down"] = 0;
      graph["prePrice"] = stockPrice;
    }
    if (graph["prePrice"] < stockPrice) {
      //가격 상승
      graph["up"] += 1;
      graph["down"] = 0;
      graph["prePrice"] = stockPrice;

      if (graph["up"] >= 3 && trade["stockCount"] > 0) {
        //3일연속 상승 전량매도
        trade["money"] = trade["stockCount"] * stockPrice;
        trade["stockCount"] = 0;
      }
    }
    if (graph["prePrice"] > stockPrice) {
      //가격 하락
      graph["up"] = 0;
      graph["down"] += 1;
      graph["prePrice"] = stockPrice;

      if (graph["down"] >= 3) {
        //3일연속 하락 전량매수
        const stockCount = parseInt(trade["money"] / stockPrice);

        trade["money"] -= stockPrice * stockCount;
        trade["stockCount"] += stockCount;
      }
    }
  }

  // console.log(trade["stockCount"] * stock[stock.length - 1] + trade["money"]);
  return trade["stockCount"] * stock[stock.length - 1] + trade["money"];
}
