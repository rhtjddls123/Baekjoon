a, b = map(int, input().split())
f = int(input())
arr = [[0 for _ in range(a)] for _ in range(b)]

x=0
y=0
dir = 0
success=False
for i in range(1, a*b+1):

    arr[x][y] = i
    if(i==f):
        print(y+1, x+1)
        success=True
        break
    if(dir==0 and x<b-1 and arr[x+1][y]==0):
        x+=1
    elif(y<a-1 and arr[x][y+1]==0):
        y+=1
    elif(x>0 and arr[x-1][y]==0):
        x-=1
    elif(dir==1 and (y<=0 or arr[x][y-1]!=0)):
        dir=0
        x+=1
    elif(dir==1 or y>0 and arr[x][y-1]==0):
        dir=1
        y-=1

if(success==False):
    print(0)