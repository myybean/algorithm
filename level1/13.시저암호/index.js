const solution = (s, n) => {
    var answer = '';

    answer = s.split("").map(c => {
        if (/[A-z]/.test(c)) {
            const a = c.charCodeAt(0) < "a".charCodeAt(0) ? "A".charCodeAt(0) : "a".charCodeAt(0);
            const caesar = (c.charCodeAt(0) - a + n) % 26 + a;
            c = String.fromCharCode(caesar);
        }
        return c;
    }).join('');

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
      assert.equal(solution("AB", 1), "BC");
    });
    it('test case 2', function () {
      assert.equal(solution("z", 1), "a");
    });
    it('test case 3', function () {
      assert.equal(solution("a B z", 4), "e F d");
    });
});