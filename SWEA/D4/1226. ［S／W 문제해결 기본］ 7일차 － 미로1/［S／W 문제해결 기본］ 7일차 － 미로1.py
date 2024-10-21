for test_case in range(1, 11):
    n = input()

    arr = []
    start = [0,0]
    for i in range(16):
        a = list(map(int,input()))
        if(2 in a):
            start = [a.index(2),i]
        arr.append(a)
    
    stack = [start]
    result = False
    while(stack):
        cur = stack.pop()
        x,y = cur

        if(arr[y][x]==3):
            result = True
            break

        arr[y][x] = 1

        if(y>0 and (arr[y-1][x]==0 or arr[y-1][x]==3)):
            stack.append([x,y-1])
        if(y<15 and (arr[y+1][x]==0 or arr[y+1][x]==3)):
            stack.append([x,y+1])
        if(x>0 and (arr[y][x-1]==0 or arr[y][x-1]==3)):
            stack.append([x-1,y])
        if(x<15 and (arr[y][x+1]==0 or arr[y][x+1]==3)):
            stack.append([x+1,y])

    print(f'#{test_case} {1 if result else 0}')

