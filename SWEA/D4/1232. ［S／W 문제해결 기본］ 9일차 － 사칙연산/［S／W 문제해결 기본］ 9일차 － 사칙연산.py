def tree(arr, index):
    if(index<=len(arr)):
        if(arr[index]['left']):
          tree(arr,int(arr[index]['left']))
        value = arr[index]['val']
        if(value=='+' or value=='-' or value=='*' or value=='/'):
          right = tree(arr,int(arr[index]['right']))
          if(right=='+' or right=='-' or right=='*' or right=='/'):
              if(arr[index]['left']):
                tree(arr,int(arr[index]['left']))
          elif(right):
            rig = r.pop()
            lef = r.pop()
            if(value=='+'):
                r.append(lef+rig)
            if(value=='-'):
                r.append(lef-rig)
            if(value=='*'):
                r.append(lef*rig)
            if(value=='/'):
                r.append(lef/rig)
            return r[-1]
            
        else:
            r.append(int(value))
            return r[-1]
            

for test_case in range(1, 11):
    n = int(input())
    arr = {}
    r = []
    for _ in range(n):
        data = input().split()
        arr[int(data[0])] = {'val':data[1], 'left':None, 'right':None}
        if(len(data)==3):
            arr[int(data[0])]['left'] = data[2]
        if(len(data)==4):
            arr[int(data[0])]['left'] = data[2]
            arr[int(data[0])]['right'] = data[3]
    
    start = 1
    tree(arr,start)
    print(f'#{test_case} {int(r.pop())}')
