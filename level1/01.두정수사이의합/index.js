const solution = (a, b) => {
    let answer = 0;

    /* # 최초 풀이
    if (a === b) answer = a;
    else {
        let start = a;
        let end = b;
        
        if (a > b) {
            start = b;
            end = a;
        }
        
        for (let i = start; i <= end; i++) {
            answer += i;
        }
    }
    */

    /* # 다른 사람의 풀이를 보고 */
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    for (let i = min; i <= max; i++) answer += i;

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
      assert.equal(solution(1, 6), '21');
    });
    it('test case 2', function () {
      assert.equal(solution(-100, 1), '-5049');
    });
    it('test case 3', function () {
      assert.equal(solution(2014, 1993), '44077');
    });
});