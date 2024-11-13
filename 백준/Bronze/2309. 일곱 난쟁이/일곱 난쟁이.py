numbers = []

for _ in range(9):
    n = int(input())
    numbers.append(n)

findNum = sum(numbers) - 100

for i in range(9):
    for j in range(i+1,9):
        if(numbers[i]+numbers[j]==findNum):
            numbers.pop(j)
            numbers.pop(i)
            break
    if(len(numbers)==7):
        break

numbers.sort()
for i in numbers:
    print(i)
