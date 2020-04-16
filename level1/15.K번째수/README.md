# K번째수

## 1. 이해
    array, commands가 주어졌을때 commands는 [i, j, k]의 배열이다. array의 i번째 숫짜부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하여 배열로 답하라.

## 2. 계획
    1. commands 배열로 loop
    2. commands 요소에서 i, j로 array배열을 자름
    3. 잘린 array를 정렬하고 k번째 요소를 answer에 담음

## 3. 실행

## 4. 회고
    - slice(시작idx, 끝idx) : 복사본을 반환
    - splice(시작idx, 개수) : 원본 배열을 수정