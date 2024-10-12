for test_case in range(1, 11):
    n = int(input())
    arr = list(map(int, input().split()))
    for i in range(n):
        arr.sort()
        arr[0] += 1
        arr[-1] -= 1
    
    arr.sort()

    print(f'#{test_case} {arr[-1]-arr[0]}')