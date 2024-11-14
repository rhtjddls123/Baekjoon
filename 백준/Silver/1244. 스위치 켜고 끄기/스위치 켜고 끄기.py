import math
N = int(input())
switch=list(map(int,input().split()))
M = int(input())

def chage(switch, n):
    c = 0
    if(switch[n]==0):
        c=1
    else:
        c=0
    return c

def findS(switch, n):
    s=n
    e=n
    while(True):
        if(s<0 or e>=len(switch) or switch[s]!=switch[e]):
            s+=1
            e-=1
            break
        s-=1
        e+=1
    return [s,e]

for _ in range(M):
    s, n = map(int,input().split())
    if(s==1):
        #남자
        for i in range(1,N+1):
            if(i%n==0):
                switch[i-1] = chage(switch, i-1)
    if(s==2):
        #여자
        st, en = findS(switch,n-1)
        for i in range(st,en+1):
            switch[i] = chage(switch, i)

for i in range(len(switch)):
    print(switch[i],end=' ')
    if((i+1)%20==0):
        print()