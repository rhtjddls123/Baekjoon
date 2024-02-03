class WeightedGraph:
    def __init__(self, num_nodes, friends):
        self.num_nodes = num_nodes
        self.friends = friends
        # 인접 행렬 초기화
        self.adj_matrix = [[0] * num_nodes for _ in range(num_nodes)]

    def add_edge(self, start, end, weight):
        # 시작 노드에서 종료 노드로의 간선에 가중치 할당
        from_ = self.friends.index(start)
        to_ = self.friends.index(end)
        self.adj_matrix[from_][to_] += weight

    def print_adj_matrix(self):
        # 인접 행렬 출력
        for row in self.adj_matrix:
            print(row)
        print(self.adj_matrix)

def solution(friends, gifts):
    friend_len = len(friends) #친구 수
    wg = WeightedGraph(friend_len,friends)
    giftsScore={} #선물지수
    result = friend_len*[0]
    for i in friends:
        giftsScore[i]=0
    for i in gifts: # 선물지수 구하는 코드
        tmp = i.split()
        giftsScore[tmp[0]]+=1
        giftsScore[tmp[1]]-=1
        wg.add_edge(tmp[0],tmp[1],1)

    for i in range(len(wg.adj_matrix)):
        for j in range(i,len(wg.adj_matrix[i])):
            if(i==j): continue
            # print(wg.adj_matrix[i][j])
            if(wg.adj_matrix[i][j]==0): #내가 안준사람 만나면
                # print(wg.adj_matrix[j][i])
                if(wg.adj_matrix[j][i]>0): #내가 안준사람이 날 줬으면
                    result[j]+=1        #내가 하나 줌
                else:                   #내가 안준사람이 나한테도 안줬으면
                    if(giftsScore[friends[i]]>giftsScore[friends[j]]):  #선물지수가 내가 크면 내가 하나 받음
                        result[i]+=1
                    elif(giftsScore[friends[i]]<giftsScore[friends[j]]): #선물지수 작으면 하나 줌
                        result[j]+=1
            else:                       #내가 준사람 만나면
                if(wg.adj_matrix[i][j]>wg.adj_matrix[j][i]): #내가 더 많이줬으면
                    result[i]+=1
                elif(wg.adj_matrix[i][j]<wg.adj_matrix[j][i]): #더 적게줬으면
                    result[j]+=1
                else:
                    if(giftsScore[friends[i]]>giftsScore[friends[j]]):  #선물지수가 내가 크면 내가 하나 받음
                        result[i]+=1
                    elif(giftsScore[friends[i]]<giftsScore[friends[j]]): #선물지수 작으면 하나 줌
                        result[j]+=1
    
    # wg.print_adj_matrix()
    # print(giftsScore)
    # print(result)
    answer = max(result)
    # print(answer)
    return answer