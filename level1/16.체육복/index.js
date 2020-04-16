const solution = (n, lost, reserve) => {
    var answer = 0;

    lost = lost.map((std, idx) => {
        const idx2 = reserve.indexOf(std);
        if (idx2 > -1) reserve.splice(idx2, 1);
        else return std;
    }).filter(el => el !== undefined);

    while (reserve.length > 0) {
        const size = reserve.shift();

        let idx = lost.indexOf(size - 1);
        if (idx > -1) lost.splice(idx, 1);
        else {
            idx = lost.indexOf(size + 1);
            if (idx > -1) lost.splice(idx, 1);
        }
    }

    answer = n - lost.length;
    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.equal(solution(5, [2,4], [1,3,5]), 5);
    });
    it('test case 2', function () {
        assert.equal(solution(5, [2,4], [3]), 4);
    });
    it('test case 3', function () {
        assert.equal(solution(3, [3], [1]), 2);
    });
});