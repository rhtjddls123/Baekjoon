function solution(players, callings) {
    const obj = {}
    
    for(let i=0; i<players.length; i+=1){
        obj[players[i]] = i;
    }
    
    for(let i=0; i<callings.length; i+=1){
        const called = callings[i] //불린 사람 여기서는 kai
        const num = obj[called] //불린 사람의 등수 여기서는 3
        const tmp = players[num-1] //불린 사람의 앞사람 여기서는 poe
        players[num] = tmp
        players[num-1] = called
        obj[called] -= 1
        obj[tmp] += 1
    }
    return players;
}

/* 
1. 맨 처음 i=0부터 시작
2. callings의 i번째를 본다
3. callings의 i번째의 player와 그 player보다 앞 선 등수의 순서를 바꾼다
4. i를 1 증가시키고 2번부터 반복한다
*/