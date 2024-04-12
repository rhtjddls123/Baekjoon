function solution(today, terms, privacies) {
    var answer = [];
    const date = {}
    const year = Number(today.slice(0,4))
    const month = Number(today.slice(5,7))
    const day = Number(today.slice(8,10))
    
    for(const term of terms){
        date[term[0]] = Number(term.slice(2))
    }
    
    for(let i=0; i<privacies.length; i+=1){
        const privacy = privacies[i]
        const pYear = Number(privacy.slice(0,4))
        const pMonth = Number(privacy.slice(5,7))
        const pDay = Number(privacy.slice(8,10))
        
        const term = privacy.at(-1)
        if(!check(pYear, pMonth, pDay, date[term], year, month, day)) answer.push(i+1)
    }
    // console.log(date)
    return answer;
}

function check(pYear, pMonth, pDay, privacy, year, month, day){
    let dateMonth = pMonth + privacy
    let dateYear = pYear
    let dateDay = pDay-1
    
    if(dateDay===0){
        dateMonth -= 1
        dateDay = 28
    }
    if(dateMonth > 12){
        dateYear += parseInt(dateMonth/12)
        dateMonth %= 12
    }
    if(dateMonth===0){
        dateMonth = 12
        dateYear -= 1
    }
    if(year>dateYear || year===dateYear && (dateMonth<month || dateMonth === month && dateDay<day)){
        // console.log(year,month,day)
        // console.log(dateYear,dateMonth,dateDay)
        return false
    } 
    else{
        return true
    }
}