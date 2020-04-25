const getTwoFactors = (x) => {
    let factors = [];
    for (let i = Math.floor(x / 2) + (x % 2 === 0 ? 0 : 1); i > 0; i--) {
        if (x % i === 0) {
            factors.push([i, x / i]);
        }
    }

    return factors;
}

const solution = (brown, red) => {
    var answer = [];

    let red_factors = getTwoFactors(red);

    red_factors = red_factors.filter(factors => {
        return ((factors[0] + 2) * (factors[1] + 2) - red) === brown;
    });

    answer = [Math.max(red_factors[0][0], red_factors[0][1]) + 2, Math.min(red_factors[0][0], red_factors[0][1]) + 2];

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.deepEqual(solution(10, 2), [4, 3]);
    });
});
describe('test pass/fail', function () {
    it('test case 2', function () {
        assert.deepEqual(solution(8, 1), [3, 3]);
    });
});
describe('test pass/fail', function () {
    it('test case 3', function () {
        assert.deepEqual(solution(24, 24), [8, 6]);
    });
});