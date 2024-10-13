import copy

for test_case in range(1, 11):
    n = int(input())
    arr = []
    size = 100
    result = [0 for _ in range(size)]

    for _ in range(size):
      row = list(map(int, input().split()))
      arr.append(row)

    r = arr[0].count(1)
    
    for i in range(r):
      start = [0, arr[0].index(1)]  # 시작은 맨 윗줄의 맨 처음 1
      s = start[1]
      arr[start[0]][start[1]] = 0
      cArr = copy.deepcopy(arr)
      
      while(True):
        if(start[0]==size-1):
          # 맨 아래 도착하면 중지
          break
        
        result[s] += 1
        if(start[1]>0 and cArr[start[0]][start[1]-1]==1):
          # 왼쪽에 길이 있을 경우
          cArr[start[0]][start[1]] = 0
          start[1] -= 1
        elif(start[1]<size-1 and cArr[start[0]][start[1]+1]==1):
          # 오른쪽에 길이 있을 경우
          cArr[start[0]][start[1]] = 0
          start[1] += 1
        else:
          cArr[start[0]][start[1]] = 0
          start[0] += 1
        
    minVal = min(x for x in result if x!=0)
    print(f'#{n} {result.index(minVal)}')