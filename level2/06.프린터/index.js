const solution = (priorities, location) => {
    var answer = 0;

    while(location > -1) {
        const j = priorities.shift();
        location --;
        if (priorities.filter(x => x > j).length === 0) {
            answer ++;
        } else {
            priorities.push(j);
            if (location === -1) {
                location = priorities.length - 1;
            }
        }
    }

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.equal(solution([2,1,3,2], 2), 1);
    });
});
describe('test pass/fail', function () {
    it('test case 2', function () {
        assert.equal(solution([1,1,9,1,1,1], 0), 5);
    });
});