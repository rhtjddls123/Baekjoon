for test_case in range(1, 11):
    n = input()

    arr = input()
    length = len(arr)

    str = ''
    stack = []
    opr = ['+','*','(',')']
    oprS = {'+':0, '*':1, '(':2, ')':2}

    for i in range(length):
        a = arr[i]
        if(a in opr):
            leng = len(stack)
            for _ in range(leng):
                if(a==')'):
                    s = stack.pop()
                    if(s=='('):
                        break
                    str += s
                elif(stack[-1]!='(' and oprS[stack[-1]]>=oprS[a]):
                    str += stack.pop()
            if(a!=')'):
                stack.append(a)
        else:
            str += a
    
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
