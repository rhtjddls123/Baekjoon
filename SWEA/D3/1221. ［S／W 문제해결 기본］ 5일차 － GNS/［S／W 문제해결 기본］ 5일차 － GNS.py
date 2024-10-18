int(input())

NUMBERS = {
    "ZRO":0, "ONE":1, "TWO":2, "THR":3, "FOR":4, "FIV":5, "SIX":6, "SVN":7, "EGT":8, "NIN":9
}

CHAR_NUMBERS = {
    0:"ZRO", 1:"ONE", 2:"TWO", 3:"THR", 4:"FOR", 5:"FIV", 6:"SIX", 7:"SVN", 8:"EGT", 9:"NIN"
}

for test_case in range(1, 11):
    n, m = input().split()

    arr = input().split()
    length = len(arr)

    for i in range(length):
        arr[i] = NUMBERS[arr[i]]

    arr.sort()
    for i in range(length):
        arr[i] = CHAR_NUMBERS[arr[i]]

    print(f'#{test_case}')
    print(" ".join(arr))
