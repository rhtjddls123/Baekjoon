function solution(n, lost, reserve) {
    var answer = 0;
    
    const student = Array(n).fill(1);
    
    for(const l of lost){
        student[l-1] -= 1;
    }
    
    for(const r of reserve){
        student[r-1] += 1;
    }
    
    for(let i=0; i<student.length; i+=1){
        if(student[i]<2) continue
        
        if(i>0 && student[i-1]===0){
            //왼쪽을 봤는데 체육복이 없을 경우 체육복 전달
            student[i-1] += 1;
            student[i] -= 1
            continue;
        }
        if((i===0 || (i>0&&student[i-1]!==0)) &&i<student.length-1 && student[i+1]===0){
            //왼쪽을 볼 수 없거나 왼쪽이 체육복이 있을 때 오른쪽에 체육복이 없을 경우
            student[i+1] += 1;
            student[i] -= 1;
        }
    }
    
    answer = student.reduce((c,p)=>{
        if(p>=1) c+=1;
        return c
    },0)
    console.log(student)
    return answer;
}