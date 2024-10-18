def find1(i,j,n,arr):
    for k in range(i, 0, -1):
        if(arr[k][j]==1):
            return k
    return False

def find2(i,j,n,arr):
    for k in range(i, n):
        if(arr[k][j]==2):
            return k
    return False
for test_case in range(1, 11):
    n = int(input())

    arr = []

    for _ in range(n):
        arr.append(list(map(int, input().split())))

    for i in range(n):
        for j in range(n):
            if(arr[i][j]==1):
                findIndex = find2(i,j,n,arr)
                arr[i][j]=0
                if(findIndex!=False):
                    arr[findIndex-1][j]=1
            elif(arr[i][j]==2):
                findIndex = find1(i,j,n,arr)
                arr[i][j]=0
                if(findIndex!=False):
                    arr[findIndex-1][j]=2

    result = 0
    for i in range(n):
        result += arr[i].count(1)
    
    print(f'#{test_case} {result}')
