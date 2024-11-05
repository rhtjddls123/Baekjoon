for test_case in range(1, 11):
    n, m = input().split()
    arr = input().split()
    dic = {}
    for i in range(0,len(arr), 2):
        dic[arr[i]] = []
    for i in range(0,len(arr), 2):
        dic[arr[i]].append(arr[i+1])
    
    prevArr = []
    prevArr.append(m)
    visit = set()
    visit.add(m)
    while(True):
        curArr = []
        for i in prevArr:
            if(i in dic):
                for j in dic[i]:
                    if(j not in visit):
                        curArr.append(j)
                        visit.add(j)
        if(not curArr):
            break
        prevArr = curArr
        
    print(f'#{test_case} {max(map(int,prevArr))}')
