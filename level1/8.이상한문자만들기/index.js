const solution = (s) => {
    var answer = '';
    const array = s.split(' ').map(word => {
        return word.split('').reduce((word2, w, idx) => {
            return `${word2}${(idx + 1) % 2 === 0 ? w.toLowerCase() : w.toUpperCase()}`;
        }, '');
    });

    answer = array.join(" ");
    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
      assert.equal(solution("try hello world"), "TrY HeLlO WoRlD");
    });
    it('test case 2', function () {
      assert.equal(solution("try hello  world"), "TrY HeLlO  WoRlD");
    });
    it('test case 3', function () {
      assert.equal(solution("try hellow world"), "TrY HeLlOw WoRlD");
    });
});