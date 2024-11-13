N,M = map(int,input().split())

game = [[0 for _ in range(N)] for _ in range(M)]

O = int(input())
garo = [0,M]
sero = [0,N]
for i in range(O):
    b = list(map(int,input().split()))
    dir = b[0]
    x = b[1]
    if(dir==0):
        garo.append(x)
    if(dir==1):
        sero.append(x)
garo.sort()
sero.sort()

maxGaro = 0
for i in range(len(garo)-1):
    maxGaro = max(maxGaro, garo[i+1]-garo[i])

maxSero = 0
for i in range(len(sero)-1):
    maxSero = max(maxSero, sero[i+1]-sero[i])
print(maxGaro*maxSero)