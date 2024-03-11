num = int(input())
result = 0

while True:
  if num==0: break
  if num%5==0:
    num -= 5
    result +=1
  else:
    num -= 3
    result +=1
  if num<0:
    result = -1
    break

print(result)