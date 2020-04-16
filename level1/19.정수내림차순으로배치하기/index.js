const solution = (n) => {
    var answer = 0;

    answer = Number(n.toString().split("").sort((a, b) => a < b).join(''));
    
    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.equal(solution(118372), 873211);
    });
});