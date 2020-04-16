const solution = (n) => {
    var answer = 0;

    answer = n.toString().split("").reduce((acc, curr) => acc + parseInt(curr), 0);

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
      assert.equal(solution(123), 6);
    });
    it('test case 2', function () {
      assert.equal(solution(987), 24);
    });
});