N = int(input())

result = []
numbers = list(map(int, input().split()))

for i in range(N):
    num = numbers[i]
    idx = i-num
    result.insert(idx, i+1)

print(' '.join(map(str,result)))