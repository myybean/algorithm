const solution = (s) => {
    var answer = 0;

    answer = parseInt(s);

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
      assert.equal(solution("1234"), 1234);
    });
    it('test case 2', function () {
      assert.equal(solution("-1234"), -1234);
    });
});