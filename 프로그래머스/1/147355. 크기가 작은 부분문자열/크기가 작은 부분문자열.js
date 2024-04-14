function solution(t, p) {
    var answer = 0;
    const len = p.length
    for(let i=0; i<t.length-len+1; i+=1){
        const num = Number(t.slice(i,i+len))
        if(num<=Number(p)) answer+=1
    }
    return answer;
}