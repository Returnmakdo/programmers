function solution(friends, gifts) {
    let answer = {};
    let giftCount = {}; // 선물 지수
    let giftList = {}; // 누가 누구에게 주었는지를 담을 객체
    
    // 초기 값 세팅 (선물 주고받은 리스트, 선물지수, 답)
    for(let i=0; i<friends.length; i++){
        answer[friends[i]] = 0
        giftCount[friends[i]] = 0
        giftList[friends[i]] = {}
        for(let j=0; j<friends.length; j++){
            if(i !== j){
                giftList[friends[i]][friends[j]] = 0
            }
        }
    }
    
    for (let i=0; i<gifts.length; i++) {
        let [give,take] = gifts[i].split(' ')
        giftCount[give] = giftCount[give]+1 // 선물 준 갯수
        giftCount[take] = giftCount[take]-1 // 선물 받은 갯수
        giftList[give][take] = giftList[give][take]+1
    }
    
    for(const give in giftList){
        for(const take in giftList[give]){
            // 주고받은 갯수가 같은 경우 && 0인 경우
            if(giftList[give][take] === giftList[take][give] || 
               giftList[give][take] === 0 && giftList[take][give] === 0){
                // 선물 지수 비교
                if(giftCount[give] > giftCount[take]){
                  answer[give] = answer[give]+1   
                }
            } else{
                // 서로 주고받은 경우가 있는 경우
                if(giftList[give][take] > giftList[give][take]){
                  answer[give] = answer[give]+1
                }
                if(giftList[give][take] < giftList[take][give]){
                  answer[take] = answer[take]+1
                }
            }
        }
    }
    answer = Math.max(...Object.values(answer)); // 객체에서 최대값 꺼내기
    return answer;
}


// 다음달에 가장 많이 받을 사람(갯수) 찾기

// 다음달에 받는 경우의 수
// - 두 사람이 주고받은 기록이 있는 경우 -> 더 많이 준 사람이 선물 +1
// - 두 사람이 주고받은 기록이 없거나 수가 같으면 -> 선물 지수가 더 큰 사람이 작은사람에게 선물 + 1받음
// 선물 지수 ?
// - A가 모두에게 준 선물의 합이 3이고 받은 갯수가 10이면 선물지수는 -7