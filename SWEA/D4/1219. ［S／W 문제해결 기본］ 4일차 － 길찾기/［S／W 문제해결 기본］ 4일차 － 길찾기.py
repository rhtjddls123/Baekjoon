for test_case in range(1, 11):
    n, l = map(int, input().split())  
    str = list(map(int, input().split()))  

    arr1 = [''] * 100 
    arr2 = [''] * 100  

    for i in range(0, len(str), 2):
        start, end = str[i], str[i + 1]
        if arr1[start] == '':
            arr1[start] = end
        elif arr2[start] == '':
            arr2[start] = end

    start = 0
    stack = []
    count = 0

    while(True):
        if(start==99):
            break
        if(arr1[start]!=''):
            stack.append(arr1[start])
            arr1[start]=''
        if(arr2[start]!=''):
            stack.append(arr2[start])
            arr2[start]=''

        if(len(stack)==0):
            break
        start = stack.pop()
        count += 1
    
    result = 1
    if(start!=99):
        result=0
    print(f'#{test_case} {result}')
