const solution = (rowIndex) => {
    let triangle = [];

    for (let i = 0; i < rowIndex + 1; i++) {
        let row = [];
        row[0] = 1;
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        if (i > 0) {
            row[i] = 1;
        }

        triangle.push(row);
    }

    return triangle.pop();
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.deepEqual(solution(3), [1, 3, 3, 1]);
    });
});
describe('test pass/fail', function () {
    it('test case 2', function () {
        assert.deepEqual(solution(0), [1]);
    });
});
describe('test pass/fail', function () {
    it('test case 3', function () {
        assert.deepEqual(solution(1), [1]);
    });
});