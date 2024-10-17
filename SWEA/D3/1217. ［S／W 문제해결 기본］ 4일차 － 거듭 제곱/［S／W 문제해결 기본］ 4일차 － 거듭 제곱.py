def power(n,m):
   if(m==0):
      return 1
   if(m==1):
      return n
   return n * power(n,m-1)

for test_case in range(1, 11):
    n = int(input())
    a,b = map(int, input().split())

    print(f'#{n} {power(a,b)}')
