N = int(input())


a = N
b = a
result = 0
resultArr = []
while(b>0):
    tmp = [a,b]
    while(tmp[-2]-tmp[-1]>=0):
        tmp.append(tmp[-2]-tmp[-1])
    if(result<len(tmp)):
        result=len(tmp)
        resultArr = tmp.copy()
    b-=1

print(result)
print(' '.join(map(str,resultArr)))