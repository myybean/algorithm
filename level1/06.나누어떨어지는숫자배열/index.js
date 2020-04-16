const solution = (arr, divisor) => {
    var answer = [];
    
    arr.filter(el => {
        if (el % divisor === 0) answer.push(el);
    });

    if (answer.length > 0) answer.sort((a, b) => a - b); // sort 함수는 아스키, 문자로 정렬함
    else answer.push(-1);
    
    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
      assert.deepEqual(solution([5, 9, 7, 10], 5), [5, 10]);
    });
    it('test case 2', function () {
      assert.deepEqual(solution([2, 36, 1, 3], 1), [1, 2, 3, 36]);
    });
    it('test case 3', function () {
      assert.deepEqual(solution([3,2,6], 10), [-1]);
    });
});