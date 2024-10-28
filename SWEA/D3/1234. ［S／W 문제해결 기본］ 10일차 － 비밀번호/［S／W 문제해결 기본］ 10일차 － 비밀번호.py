for test_case in range(1, 11):
    n, o = input().split()
    m = list(o)
    index = 0
    while(len(m)>index+1):
        a = m[index]
        b = m[index+1]
        if(a==b):
            m.pop(index)
            m.pop(index)
            index-=1
            if(index<0):
                index=0
            continue
        index += 1
        
    print(f'#{test_case} {"".join(m)}')
