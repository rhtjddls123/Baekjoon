import sys

arr = []
while (1):
  a = list(map(int,sys.stdin.readline().split()))
  if(len(a)==0): break
  print(a[0]+a[1])
