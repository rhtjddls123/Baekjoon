for test_case in range(1, 11):
    n = int(input())
    arr = input().split()
    m = int(input())
    o = input().split('I ')
    for i in range(1,m+1):
        a = o[i].split(' ')
        b = int(a[0])
        for j in range(2,int(a[1])+2):
            arr.insert(b,a[j])
            b+=1

    print(f'#{test_case} ',end='')
    for i in range(10):
        print(arr[i],end=' ')
    print()

