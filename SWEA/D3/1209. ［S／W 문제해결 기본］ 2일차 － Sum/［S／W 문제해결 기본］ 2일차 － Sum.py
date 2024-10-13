for test_case in range(1, 11):
    n = int(input())
    arr = []
    result = [[],[0 for i in range(100)],[0,0]]
    for _ in range(100):
      row = list(map(int, input().split()))
      result[0].append(sum(row))
      arr.append(row)
    
    for i in range(len(arr)):
       a = arr[i]
       for j in range(len(a)):
          result[1][j] += a[j]
          if(i==j):
             result[2][0] += a[i]
          elif(i+j==99):
             result[2][1] += a[i]
    
    m = 0
    for r in result:
       if(m<max(r)):
          m = max(r)

    print(f'#{n} {m}')