def isPalindrome(str):
    return str == str[::-1]

def findPalindrome(arr, l):
  max_len = 1
  for i in range(l):
    for length in range(1, l+1):
      for start in range(l - length + 1):
        substring = arr[i][start:start+length]
        if(isPalindrome(substring)):
          max_len = max(length, max_len)

  return max_len

for test_case in range(1, 11):
    n = int(input())
    rowArr = []
    len = 100
    colArr = [[] for _ in range(len)]
    count=0

    for _ in range(len):
        row = list(input())
        rowArr.append(row)

    for i in range(len):
      for j in range(len):
        colArr[i].append(rowArr[j][i])

    print(f'#{n} {max(findPalindrome(rowArr, len),findPalindrome(colArr, len))}')

