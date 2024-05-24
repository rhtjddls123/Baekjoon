class Stack:
    def __init__(self):
        self.stack = []
    
    def is_empty(self):
        if not self.stack:
            return True
        else:
            return False
    
    def push(self, item):
        self.stack.append(item)
    
    def pop(self):
        if not self.is_empty():
            result = self.stack[-1]
            del self.stack[-1]
            return result
  
    def peek(self):
        if not self.is_empty():
            return self.stack[-1]


def postfix(str):
    s = Stack()
    result = ""
    symbol = {'(':0, ')':1, '+':2, '-':2, '*':3, '/':3}
    for ch in str:
        ch_num=symbol.get(ch, -1)
        if ch_num<0:
            result+=ch
        elif s.is_empty():
            s.push(ch)
        else:
            if ch_num==0:
                s.push(ch)
            elif ch_num==1:
                while not s.is_empty():
                    tmp = s.pop()
                    if tmp=='(':
                        break
                    else:
                        result+=tmp
            elif ch_num>symbol.get(s.peek()):
                s.push(ch)
            else:
                while not s.is_empty():
                    tmp = s.pop()
                    result+=tmp
                    if s.is_empty() or symbol.get(s.peek())<ch_num or s.peek()=='(':
                        s.push(ch)
                        break

    while not s.is_empty():
        result+=s.pop()
    return result

print(postfix(input()))