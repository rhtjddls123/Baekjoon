function solution(s) {
    var answer = 0;
    let x = null;
    let count = 0
    let c = 0
    for(let i=0; i<s.length; i+=1){
        if(!x){
            x = s[i]
            count += 1
            if(i===s.length-1){
                answer+=1
            }
            continue;
        }
        
        if(x===s[i]){
            count+=1
            if(count!==c && i===s.length-1){
            answer+=1
        }
            continue;
        }
        
        c+=1
        if(count!==c && i===s.length-1){
            answer+=1
        }
        if(count===c){
            answer+=1
            x=null;
            count=0;
            c=0;
        }
    }
    return answer;
}