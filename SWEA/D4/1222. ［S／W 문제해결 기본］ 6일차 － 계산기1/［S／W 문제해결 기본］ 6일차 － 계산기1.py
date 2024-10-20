for test_case in range(1, 11):
    n = input()

    arr = input()
    length = len(arr)

    str = ''
    stack = []

    for i in range(length):
        if(arr[i]=='+' and len(stack)>0):
            str += stack.pop()
        if(arr[i]=='+'):
            stack.append(arr[i])
        else:
            str += arr[i]
    
    if(len(stack)>0):
        for i in range(len(stack)):
            str += stack.pop()

    for i in range(len(str)):
        if(str[i]=='+'):
            stack.append(stack.pop()+stack.pop())
        else:
            stack.append(int(str[i]))
    print(f'#{test_case} {stack.pop()}')
