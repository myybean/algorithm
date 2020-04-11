const solution = (s) => {
    var answer = '';

    answer = s.split('').sort().reverse().join('');

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
      assert.equal(solution("Zbcdefg"), "gfedcbZ");
    });
    it('test case 2', function () {
      assert.equal(solution("ZbcdZefg"), "gfedcbZZ");
    });
    it('test case 3', function () {
      assert.equal(solution("Zbcdefgaz"), "zgfedcbaZ");
    });
    it('test case 4', function () {
      assert.equal(solution("Ab"), "bA");
    });
    it('test case 5', function () {
      assert.equal(solution("aB"), "aB");
    });
    it('test case 6', function () {
      assert.equal(solution("ABCDE"), "EDCBA");
    });
    it('test case 7', function () {
      assert.equal(solution("abcde"), "edcba");
    });
    it('test case 8', function () {
      assert.equal(solution("ZbcdefDgazBC"), "zgfedcbaZDCB");
    });
    it('test case 9', function () { // -ZbcdefDgazBC
      assert.equal(solution("ZbcdefDgaBC"), "gfedcbaZDCB");
    });
});