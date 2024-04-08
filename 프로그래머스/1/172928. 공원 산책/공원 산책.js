function solution(park, routes) {
    var answer = [];
    const parks = []
    const cur = [0,0]
    for(let i=0; i<park.length; i+=1){
        parks.push([])
        for(let j=0; j<park[i].length; j+=1){
            if(park[i][j]==='S'){
                cur[0] = i
                cur[1] = j
            }
            parks[i].push(park[i][j])
        }
    }
    
    for(let i = 0; i<routes.length; i+=1){
        const direction = routes[i][0]
        const m = routes[i][2]
        const tmp = [...cur]
        
        if(check(tmp, direction, m, parks))
            move(cur, direction, m)
    }
    
    return cur;
}

function move(cur, direction, m){
    if(direction==='E'){
        cur[1] += Number(m)
    }else if(direction==='W'){
        cur[1] -= Number(m)
    }else if(direction==='S'){
        cur[0] += Number(m)
    }else if(direction==='N'){
        cur[0] -= Number(m)
    }
}

function check(tmp, direction, m, parks){
    for(let j=0; j<m; j+=1){
        if(direction==='E'){
            tmp[1] += 1
        }else if(direction==='W'){
            tmp[1] -= 1
        }else if(direction==='S'){
            tmp[0] += 1
        }else if(direction==='N'){
            tmp[0] -= 1
        }
        
        if(tmp[0]<0||tmp[1]<0||tmp[0]>=parks.length||tmp[1]>=parks[0].length||parks[tmp[0]][tmp[1]]==='X'){
            return false
        }
    }
        return true
}