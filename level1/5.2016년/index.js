const solution = (a, b) => {
    var answer = '';
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    /* Date 사용
    const date = new Date(2016, (a - 1), b);
    answer = days[date.getDay()];
    */

    /* 주어진 값으로 계산 */
    let sum_dates = 0;
    for (let i = 1; i < a; i++) {
        sum_dates += (new Date(2016, i, 0)).getDate();
    }
    sum_dates += b;
    answer = days[(sum_dates + 4) % 7];

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
      assert.equal(solution(5, 24), "TUE");
    });
    it('test case 2', function () {
      assert.equal(solution(2, 2), "TUE");
    });
    it('test case 3', function () {
      assert.equal(solution(7, 7), "THU");
    });
});