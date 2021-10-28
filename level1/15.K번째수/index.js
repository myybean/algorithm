const solution = (array, commands) => {
    var answer = [];

    commands.forEach(command => {
        const [from, to, index] = command;
        answer.push(array.slice(from - 1, to).sort((a, b) => a - b)[index - 1]);
    });

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.deepEqual(solution([1,5,2,6,3,7,4], [[2,5,3], [4,4,1], [1,7,3]]), [5,6,3]);
    });
});