function solution(n, m, section) {
    var answer = 0;
    //가장 많은걸 한 번에 치워야함
    //근데 시작은 지워져야 할 것의 맨 처음이나 맨 마지막
    if(m===1)
        return section.length
    
    let count = 0;
    
    while(true){
        if(section.length===0)
            return count;
    
        let start = section[0]
        // let end = section[section.length-1]

        let len = start+m-1;
        // let len2 = end-m+1

        let s = section.filter((item)=>item>len)
        // let e = section.filter((item)=>item<len2)
        // if(s.length>e.length){
        //     section=e
        // }
        // else{
        section=s
        // }
        count+=1
    }
    
    
    return answer;
}