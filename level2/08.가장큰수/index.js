const solution = (numbers) => {
    var answer = '';

    let strs = numbers.map(number => number.toString());
    strs = strs.sort((v1, v2) => {
        return (v2 + v1).localeCompare(v1 + v2);
    });

    while (strs[0] === '0' && strs.length > 1) {
        strs.shift();
    }
    answer = strs.join('');

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.equal(solution([6, 10, 2]), "6210");
    });
});
describe('test pass/fail', function () {
    it('test case 2', function () {
        assert.equal(solution([3, 30, 34, 5, 9]), "9534330");
    });
});