for test_case in range(1, 11):
    n = input()

    arr = input()
    length = len(arr)

    str = ''
    stack = []
    opr = ['+','*']
    oprS = {'+':0, '*':1}

    for i in range(length):
        if(arr[i] in opr):
            leng = len(stack)
            for _ in range(leng):
                if(oprS[stack[-1]]>=oprS[arr[i]]):
                    str += stack.pop()
            stack.append(arr[i])
        else:
            str += arr[i]
    
    if(len(stack)>0):
        for i in range(len(stack)):
            str += stack.pop()

    for i in range(len(str)):
        if(str[i]=='+'):
            stack.append(stack.pop()+stack.pop())
        elif(str[i]=='*'):
            stack.append(stack.pop()*stack.pop())
        else:
            stack.append(int(str[i]))
    print(f'#{test_case} {stack[0]}')
