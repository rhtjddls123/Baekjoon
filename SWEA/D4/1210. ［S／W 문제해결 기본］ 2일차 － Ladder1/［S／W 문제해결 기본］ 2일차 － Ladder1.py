for test_case in range(1, 11):
    n = int(input())
    arr = []
    size = 100
    for _ in range(size):
      row = list(map(int, input().split()))
      arr.append(row)
  
    start = [size-1, arr[size-1].index(2)] # 목표 위치, 아래부터 올라갈것 높이, 가로
    
    while(True):
      if(start[0]==0):
        break
      
      # 맨 아래부터 위로
      if(start[1]>0 and arr[start[0]][start[1]-1]==1):
        # 왼쪽에 길이 있을 경우
        arr[start[0]][start[1]] = 0
        start[1] -= 1
      elif(start[1]<size-1 and arr[start[0]][start[1]+1]==1):
        # 오른쪽에 길이 있을 경우
        arr[start[0]][start[1]] = 0
        start[1] += 1
      else:
        arr[start[0]][start[1]] = 0
        start[0] -= 1
        
    
    print(f'#{n} {start[1]}')