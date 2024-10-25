
for test_case in range(1, 11):
    n = int(input())
    arr = input().split()
    m = int(input())
    o = input().split()
    for i in range(len(o)):
        if(o[i]=='I'):
            a = int(o[i+1])
            b = int(o[i+2])
            c = i+3
            for j in range(c, c+b):
                arr.insert(a,o[j])
                a+=1

        if(o[i]=='D'):
            a = int(o[i+1])
            b = int(o[i+2])
            for j in range(b):
                arr.pop(a)

    print(f'#{test_case} ',end='')
    for i in range(10):
        print(arr[i],end=' ')
    print()
