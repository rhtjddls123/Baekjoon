function solution(s) {
    var answer = [];
    const obj = {}
    for(let i=0; i<s.length; i+=1){
        const char = s[i]
        if(char in obj){
            answer.push(i-obj[char])
        } else{
            answer.push(-1)
        }
        
        obj[char] = i
    }
    return answer;
}