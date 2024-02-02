import sys

count = int(sys.stdin.readline())
arr = list(map(int,sys.stdin.readline().split()))
search = int(sys.stdin.readline())

result=0
for i in arr:
  if(i==search):
    result+=1

print(result)