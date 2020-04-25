const solution = (arr) => {
    var answer = 0;

    answer = arr.reduce((acc, curr) => acc + curr) / arr.length;

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.equal(solution([1,2,3,4]), 2.5);
    });
});
describe('test pass/fail', function () {
    it('test case 2', function () {
        assert.equal(solution([5,5]), 5);
    });
});