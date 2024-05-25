const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (x) => {
  input.push(x);
}).on("close", () => {
  const string = input[0];

  solution(string);
});
/*
1. 들어온 문자열을 한글자씩 확인한다
2. 단어의 시작이 들어오면 공백이 나올때까지가 한 단어이다
3. 만약에 <가 들어왔다면 >가 나올때까지 단어는 시작하지 않는다
4. 배열에 저장할때는 {type: ??, str: ??} 로 저장해준다
	4-1. 예를들어
	태그가 저장될때는 {type: 'tag', str: '<abc>'}
	단어가 저장될때는 {type: 'word', str: 'hi'}
	공백이 저장될때는 {type: 'blank', str: ' '}
	이렇게 저장된다.
5. 배열을 순회하면서 type이 word일 경우 뒤집어준다
6. 배열을 순회하면서 출력해준다.
*/

function solution(string) {
  const strArr = [];
  let tmp = "";
  let curTag = false;
  for (let i = 0; i < string.length; i += 1) {
    const char = string[i];

    if (char === " " && !curTag) {
      // 단어가 공백으로 끝났을 경우
      strArr[strArr.length - 1]["str"] = tmp; // 단어를 저장
      strArr.push({ type: "blank", str: " " }); // 공백을 저장
      tmp = ""; // tmp 초기화
      continue;
    }

    if (tmp && char === "<") {
      // 단어가 태그가 시작되면서 끝났을 경우
      curTag = true;
      strArr[strArr.length - 1]["str"] = tmp; // 단어를 저장
      strArr.push({ type: "tag", str: "" });
      tmp = "<"; // tmp 초기화
      continue;
    }

    if (!tmp && char === "<") {
      // 태그가 시작될때
      curTag = true;
      strArr.push({ type: "tag", str: "" });
      tmp = "<";
      continue;
    }

    if (curTag && char === ">") {
      // 태그가 끝날때
      curTag = false;
      tmp += ">";
      strArr[strArr.length - 1]["str"] = tmp; // 태그를 저장
      tmp = ""; // tmp초기화
      continue;
    }

    if (!tmp) {
      // 단어가 시작될 때
      strArr.push({ type: "word", str: "" });
      tmp = char;
      continue;
    }

    if (tmp) {
      // tmp를 업데이트
      tmp += char;
      continue;
    }
  }

  if (tmp) {
    // 반복이 끝났을 때 단어가 tmp에 존재할 시
    strArr[strArr.length - 1]["str"] = tmp;
  }

  for (let i = 0; i < strArr.length; i += 1) {
    if (strArr[i]["type"] === "word") {
      // 단어일 경우 뒤집기
      strArr[i]["str"] = reverseStr(strArr[i]["str"]);
    }
  }

  let result = "";
  for (const str of strArr) {
    result += str["str"];
  }
  console.log(result);
}

function reverseStr(str) {
  const reverseArr = str.split("");
  reverseArr.reverse();
  return reverseArr.join("");
}
