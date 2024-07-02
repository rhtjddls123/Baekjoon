function solution(number, k) {
  /*
    stack을 사용할것

    왼쪽부터 숫자를 push해줄건데
    현재 숫자가 이전 숫자보다 크면 pop을 반복하여 현재숫자보다 크거나 같은게 나오거나 비어있을 때 push
    pop을 k번했으면 나머지 숫자를 더해주고 종료
  */
  var answer = "";
  let count = 0;
  const stack = [];

  for (let i = 0; i < number.length; i += 1) {
    const num = +number[i];

    // 스택의 마지막 숫자보다 현재 숫자가 크면 스택에서 제거
    while (count < k && stack.length > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      count += 1;
    }

    stack.push(num);
  }

  while (count < k) {
    stack.pop();
    count += 1;
  }

  answer = stack;
  return answer.join("");
}