bingo = []

def bingoCehck(arr):
    count = 0
    #가로 체크
    for i in arr:
        if(i.count(1)==5):
            count+=1
    #세로 체크
    for i in range(5):
        c=0
        for j in range(5):
            if(arr[j][i]==1):
                c+=1
        if(c==5):
            count+=1

    #대각선 체크
    rc = 0
    lc = 0
    for i in range(5):

        if(arr[i][i]==1):
            rc+=1
        if(arr[i][4-i]==1):
            lc+=1
    if(rc==5):
        count+=1
    if(lc==5):
        count+=1

    return count>=3

def findIdx(arr, n):
    for i in range(5):
        for j in range(5):
            if(arr[i][j]==n):
                return [i,j]

for _ in range(5):
    line = list(map(int,input().split()))
    bingo.append(line)

call = []
for _ in range(5):
    line = list(map(int,input().split()))
    for i in line:
        call.append(i)

bingoArr = [[0 for _ in range(5)] for _ in range(5)]
count=0
for i in call:
    count+=1
    x,y = findIdx(bingo, i)
    bingoArr[x][y] = 1
    if(bingoCehck(bingoArr)):
        break

print(count)