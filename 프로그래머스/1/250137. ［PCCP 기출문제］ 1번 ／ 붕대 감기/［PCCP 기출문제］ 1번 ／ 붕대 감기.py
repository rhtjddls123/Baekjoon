def solution(bandage, health, attacks):
    count = attacks[len(attacks)-1][0]
    attack_count = 0 #몇번째 공격인지
    cur_health = health #현재 체력
    sc = 0 #현재 몇번 성공했나
    # print(count)
    for i in range(count):
        if(attacks[attack_count][0]==i+1): #이번에 공격받음
            sc=0
            cur_health-=attacks[attack_count][1]
            attack_count+=1
            if(attack_count>len(attacks)|cur_health<=0): #마지막 공격이였거나 체력이 없으면 그만
                break
        else: #공격 안받음
            cur_health+=bandage[1] #회복량만큼 회복
            sc+=1
            if(sc==bandage[0]):
                cur_health+=bandage[2]
                sc=0
            if(cur_health>=health):
                cur_health=health

            
    if(cur_health<=0):
        answer=-1
    else:
        answer=cur_health
    # print(answer)
    return answer