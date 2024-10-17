for test_case in range(1, 11):
  n = int(input())
  str = input()

  openW = ['(','[','{','<']
  closeW = {')':'(',']':'[','}':'{','>':'<'}

  stack = []
  result = 1
  
  for i in range(n):
    if(str[i] in openW):
      stack.append(str[i])
    elif(str[i] in closeW):
      openWord = stack.pop()
      if(openWord!=closeW[str[i]]):
        result=0
        break

  print(f'#{test_case} {result}')