const solution = (arrangement) => {
    var answer = 0;

    let sticks = 0;

    arrangement.split('').reduce((acc, curr) => {
        if (curr === ')') {
            if (acc === '(') {
                answer += sticks;
            } else {
                sticks --;
                answer ++;
            }
        } else {
            if (acc === '(') {
                sticks ++;
            }
        }

        return curr;
    }, '');

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.equal(solution('()(((()())(())()))(())'), 17);
    });
});