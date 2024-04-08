function solution(n, m, sections) {
    var answer = 0;
    let tmp=0
    for(const section of sections){
        if(tmp<section){
            tmp = section+m-1
            answer+=1
        }
    }
    
    return answer;
}