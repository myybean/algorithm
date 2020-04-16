const solution = (n) => {
    var answer = [];

    answer = n.toString().split("").reverse().map(m => Number(m));
    
    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.deepEqual(solution(12345), [5,4,3,2,1]);
    });
});