def solution(id_list, report, k):
    count = len(id_list)
    result = [count*[0] for _ in range(count)]
    s_count = [0]*count
    answer = [0]*count
    for i in report:
        tmp = i.split(' ')
        from_ = id_list.index(tmp[0])
        to_ = id_list.index(tmp[1])
        if(result[from_][to_]==1):continue
        result[from_][to_] = 1
        s_count[to_]+=1
    
    for i in range(count):
        for j in range(len(s_count)):
            # print(result[i][j])
            # print(s_count[j])
            # print(s_count[j]>=k and result[i][j]==1)
            if(s_count[j]>=k and result[i][j]==1):
                answer[i]+=1
        
    # print(result)
    # print(s_count)
    # print(answer)
    return answer