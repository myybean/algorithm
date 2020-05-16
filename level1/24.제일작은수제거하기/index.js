const solution = (arr) => {
    var answer = [];

    if (arr.length === 1) answer = [-1];
    else {
        answer = arr.concat();
        let smallest = arr.sort((a, b) => a - b)[0];
        answer.splice(answer.indexOf(smallest), 1);
    }

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.deepEqual(solution([4,3,2,1]), [4,3,2]);
    });
});
describe('test pass/fail', function () {
    it('test case 2', function () {
        assert.deepEqual(solution([10]), [-1]);
    });
});
describe('test pass/fail', function () {
    it('test case 3', function () {
        assert.deepEqual(solution([1,5,3,4]), [5,3,4]);
    });
});