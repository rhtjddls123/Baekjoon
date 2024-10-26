def tree(arr, index):
    if(index<len(arr)):
        tree(arr,2*index+1)
        print(arr[index], end='')
        tree(arr,2*index+2)

for test_case in range(1, 11):
    n = int(input())
    arr = [0 for _ in range(n)]
    for _ in range(n):
        data = input().split()
        arr[int(data[0])-1] = data[1]
    
    start = 0
    print(f'#{test_case} ',end='')
    tree(arr,start)
    print()
