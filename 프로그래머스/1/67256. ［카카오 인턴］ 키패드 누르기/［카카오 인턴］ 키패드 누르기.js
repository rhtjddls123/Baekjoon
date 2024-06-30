function solution(numbers, hand) {
    var answer = '';
    const left = [3,0];
    const right = [3,2];
    
    const position = {
        1: [0,0],
        2: [0,1],
        3: [0,2],
        4: [1,0],
        5: [1,1],
        6: [1,2],
        7: [2,0],
        8: [2,1],
        9: [2,2],
        '*': [3,0],
        0: [3,1],
        '#': [3,2],
    }
    
    for(let i=0; i<numbers.length; i+=1){
        const num = numbers[i];
        if(num===1 || num===4 || num===7){
            left[0] = position[num][0]
            left[1] = position[num][1]
            answer += 'L'
            continue
        }
        if(num===3 || num===6 || num===9){
            right[0] = position[num][0]
            right[1] = position[num][1]
            answer += 'R'
            continue
        }
        
        const leftDist = Math.abs(position[num][0] - left[0]) + Math.abs(position[num][1] - left[1])
        const rightDist = Math.abs(position[num][0] - right[0]) + Math.abs(position[num][1] - right[1])
        
        if(leftDist>rightDist || (leftDist===rightDist&&hand==='right')){
            right[0] = position[num][0]
            right[1] = position[num][1]
            answer += 'R'
        }
        else if(leftDist<rightDist || (leftDist===rightDist&&hand==='left')){
            left[0] = position[num][0]
            left[1] = position[num][1]
            answer += 'L'
        }
    }
    
    return answer;
}