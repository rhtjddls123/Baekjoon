def counting(arr, l):
  count = 0
  for i in range(8):
    for j in range(8-l+1):
      check = arr[i][j:j+l]

      correct = []
      p = l//2
      for k in range(p):
        correct.append(check[k])

      if(l%2!=0):
        #홀수일 경우
        p += 1

      result = True
      for k in range(p,l):
        if(check[k]!=correct.pop()):
          result = False
          break
        
      if(result):
        count += 1
  return count

for test_case in range(1, 11):
    l = int(input())
    rowArr = []
    colArr = [[] for _ in range(8)]
    count=0

    for _ in range(8):
        row = list(input())
        rowArr.append(row)

    for i in range(8):
      for j in range(8):
        colArr[i].append(rowArr[j][i])
    
    
    
    print(f'#{test_case} {counting(rowArr,l) + counting(colArr,l)}')


