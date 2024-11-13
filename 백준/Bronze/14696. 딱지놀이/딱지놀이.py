def score(ddakji):
    s = 0
    for i in ddakji:
        if(i==4):
            s+=10000000
        if(i==3):
            s+=100000
        if(i==2):
            s+=1000
        if(i==1):
            s+=1
    return s
N = int(input())

for _ in range(N):
    ddakji = list(map(int, input().split()))
    ddakji.pop(0)
    A = score(ddakji)
    ddakji = list(map(int, input().split()))
    ddakji.pop(0)
    B = score(ddakji)
    if(A>B):
        print('A')
    elif(A<B):
        print('B')
    else:
        print('D')