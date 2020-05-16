const solution = (n) => {
    var answer = 0;

    let x = Math.sqrt(n);
    if (isNaN(x) || !Number.isInteger(x)) answer = -1;
    else answer = Math.pow(x + 1, 2);

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.equal(solution(121), 144);
    });
});
describe('test pass/fail', function () {
    it('test case 2', function () {
        assert.equal(solution(3), -1);
    });
});