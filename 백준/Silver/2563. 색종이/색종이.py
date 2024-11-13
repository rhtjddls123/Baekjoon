N = int(input())

game = [[0 for _ in range(100)] for _ in range(100)]

for i in range(N):
    b = list(map(int,input().split()))
    x = b[0]
    y = b[1]
    for j in range(10):
        for k in range(10):
            game[y+k][x+j] = i+1

result = 0
for j in range(N):
    sum = 0
    for i in game:
        sum+=i.count(j+1)
    result+=sum

print(result)