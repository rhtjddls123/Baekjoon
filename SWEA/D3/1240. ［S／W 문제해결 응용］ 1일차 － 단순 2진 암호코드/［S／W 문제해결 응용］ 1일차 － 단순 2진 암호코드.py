def findNums(arr):
    for i in arr:
        for j in range(len(i) - 1, -1, -1):
            if (i[j] == 1):
                return i[j - 55:j + 1]
    return None

case = int(input())
BIT_TO_NUMBER = {
    '0001101':0,
    '0011001':1,
    '0010011':2,
    '0111101':3,
    '0100011':4,
    '0110001':5,
    '0101111':6,
    '0111011':7,
    '0110111':8,
    '0001011':9
}

for k in range(case):
    N,M = map(int, input().split())

    arr = []


    for i in range(N):
        line = list(map(int, input()))
        arr.append(line)

    sNums = findNums(arr)

    num = ''
    nums = []
    for i in range(len(sNums)):
        num += str(sNums[i])
        if((i+1)%7==0):
            nums.append(BIT_TO_NUMBER[num])
            num=''

    odd=0
    even=0
    for i in range(len(nums)):
        if((i+1)%2==0):
            even+=nums[i]
        else:
            odd+=nums[i]

    resultNum = odd+even
    if((3*odd + even)%10==0):
        print(f'#{k+1} {resultNum}')
    else:
        print(f'#{k+1} 0')