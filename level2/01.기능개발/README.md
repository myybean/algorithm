# 기능개발

## 1. 이해
    배포되어야하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발속도 정수 배열 speeds가 주어질 때 각 배포마다 몇개의 기능이 배포될 수 있는지 구하여 빈환하라.

## 2. 계획
    1. day loop에서 작업 진도에 개발속도를 더함
    2. 맨 앞 배포건이 진도 100 이상인지 확인 loop -> 100을 넘지 않을때까지 확인
    3. 배포 가능건수를 리턴 값에 push하고 다음날짜로

## 3. 실행

## 4. 회고
    - 내가 한 방법은 매일매일 loop로 돌려 개발진도율을 계산했는데, 애초에 모든 배포건의 개발완료까지 소요되는 일 수를 구한 후 계산하는 방법도 있었음