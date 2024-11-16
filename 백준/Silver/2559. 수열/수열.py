N, K = map(int, input().split())
nums = list(map(int,input().split()))

sumArr = []

tmp = 0
for i in range(K):
    tmp+=nums[i]

sumArr.append(tmp)

for i in range(K, N):
    tmp-=nums[i-(K)]
    tmp+=nums[i]
    sumArr.append(tmp)

print(max(sumArr))