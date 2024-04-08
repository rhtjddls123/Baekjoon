function solution(name, yearning, photo) {
    var answer = [];
    const score = {}
    for(let i=0; i<name.length; i+=1){
        score[name[i]] = yearning[i]
    }
    
    for(let i=0; i<photo.length; i+=1){
        answer.push(0)
        for(let j=0; j<photo[i].length; j+=1){
            if(score[photo[i][j]])
                answer[i]+=score[photo[i][j]]
        }
    }
    console.log(score)
    return answer;
}