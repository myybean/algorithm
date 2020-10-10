# Next Greater Element 1

## 1. 이해
    nums1, nums2 두개의 배열이 주어질 때, nums1에 주어진 배열의 각 값들이 nums2에서 순서상 더 뒤 요소 중에 더 큰 값이 있으면 그 인덱스르, 없으면 -1을 반환하는 배열을 구하라. 

## 2. 계획
    1. nums1을 포문으로 돌림
    2. nums2에서 그 요소의 위치를 찾음
    3. 위치보다 더 뒤에 있는 값 중 요소보다 큰 값이 있으면 그 인덱스를, 없으면 -1
    4. 결과를 배열에 누적하여 반환함

## 3. 실행
    - Runtime: 92 ms, faster than 30.47% of JavaScript online submissions for Next Greater Element I.
    - Memory Usage: 40.1 MB, less than 8.60% of JavaScript online submissions for Next Greater Element I.

## 4. 회고
    