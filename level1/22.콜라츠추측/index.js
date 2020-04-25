const solution = (num) => {
    var answer = 0;

    while (num !== 1 && answer < 501) {
        if (num % 2 === 0) num = num / 2;
        else num = num * 3 + 1;
        answer ++;
    }

    if (num !== 1) answer = -1;

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.equal(solution(6), 8);
    });
});
describe('test pass/fail', function () {
    it('test case 2', function () {
        assert.equal(solution(16), 4);
    });
});
describe('test pass/fail', function () {
    it('test case 3', function () {
        assert.equal(solution(626331), -1);
    });
});