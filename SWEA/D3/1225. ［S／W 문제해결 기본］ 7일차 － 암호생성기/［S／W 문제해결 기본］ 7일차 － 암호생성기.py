for test_case in range(1, 11):
    n = input()

    arr = list(map(int,input().split()))
    test = []
    length = len(arr)
    for i in range(length):
        if(arr[i]<10):
            test.append(True)
        else:
            test.append(False)
    discount = 1
    while(True):
        if(discount>5):
            discount=1
        num = arr.pop(0)
        test.pop(0)
        num-=discount
        discount+=1
        if(num<=0):
            num=0
        if(num<10):
            test.append(True)
        else:
            test.append(False)
        arr.append(num)
        if(num==0 and False not in test):
            break

    print(f'#{test_case} {" ".join(map(str,arr))}')
