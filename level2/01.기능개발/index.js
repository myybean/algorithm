const solution = (progresses, speeds) => {
    var answer = [];

    while (progresses.length > 0) {
        progresses = progresses.map((progress, idx) => progress += speeds[idx]);

        let count_today = 0;

        while (progresses[0] > 99) {
            speeds.shift();
            progresses.shift();
            count_today ++;
        }

        if (count_today > 0) answer.push(count_today);
    }
    
    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.deepEqual(solution([93,30,55], [1,30,5]), [2,1]);
    });
});