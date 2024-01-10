function solution(numbers) {
    const newList = [];
    const answer = new Array(numbers.length).fill(-1); // 매개변수 길이만큼 담을 배열, 초기값 -1로설정
    
    for (let i = numbers.length - 1; i >= 0; i--) {
        // 스택이 비어 있지 않고, 현재 숫자가 스택의 마지막 값보다 큰 경우
        while (newList.length > 0 && numbers[i] >= newList[newList.length - 1]) {
            newList.pop(); // 스택의 마지막 값을 제거
        }

        if (newList.length > 0) {
            answer[i] = newList[newList.length - 1]; // 현재 숫자의 뒤 큰수 저장
        }

        newList.push(numbers[i]); // 현재 숫자를 스택에 추가
    }

    return answer;
}