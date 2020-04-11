const solution = (s) => {
    var answer = true;

    if (!(s.length === 6 || s.length === 4)) answer = false;
    else if (/[A-z]/.test(s)) answer = false;

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
      assert.equal(solution("a234"), false);
    });
    it('test case 2', function () {
      assert.equal(solution("12 4"), true);
    });
    it('test case 3', function () {
      assert.equal(solution("12345"), false);
    });
});