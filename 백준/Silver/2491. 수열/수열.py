N = int(input())
nums = list(map(int,input().split()))

longer = 1
ls = 1
ss = 1
for i in range(1,N):
    if(nums[i-1]>=nums[i]):
        ls+=1
    else:
        ls=1
    if(nums[i-1]<=nums[i]):
        ss+=1
    else:
        ss=1
    longer = max(longer, ls, ss)

print(longer)