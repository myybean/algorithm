const solution = (n) => {
    var answer = 0;
    const center = (n / 2) + (n % 2 === 0 ? 1 : 0);

    for (let i = 1; i < center; i++) {
        const div = n / i;
        if (div === Math.floor(div)) answer += i;
    }

    answer += n;

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.equal(solution(12), 28);
    });
    it('test case 2', function () {
        assert.equal(solution(5), 6);
    });
});