const solution = (array, commands) => {
    var answer = [];

    commands.forEach(command => {
        answer.push(array.slice(command[0] - 1, command[1]).sort((a, b) => a > b)[command[2] - 1]);
    });

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.deepEqual(solution([1,5,2,6,3,7,4], [[2,5,3], [4,4,1], [1,7,3]]), [5,6,3]);
    });
});