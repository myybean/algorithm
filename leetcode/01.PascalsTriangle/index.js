const solution = (numRows) => {
    let answer = [];

    for (let i = 0; i < numRows; i++) {
        let row = [];
        row[0] = 1;
        for (let j = 1; j < i; j++) {
            row[j] = answer[i - 1][j - 1] + answer[i - 1][j];
        }
        if (i > 0) {
            row[i] = 1;
        }
        answer.push(row);
    }

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.deepEqual(solution(5), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
    });
});