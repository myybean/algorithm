const solution = (answers) => {
    var answer = [];
    const patterns = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    let counts = [];

    answers.forEach((answer, q_idx) => {
        patterns.forEach((pattern, idx) => {
            if (q_idx === 0) counts.push({k: idx, v: 0});
            if (answer === pattern[q_idx % pattern.length]) {
                const o = counts.find(c => c.k === idx);
                if (o !== undefined) o.v ++;
            }
        });
    });

    // counts = counts.sort((a, b) => a.v < b.v);
    // const rank1 = counts[0].v;
    const rank1 = Math.max(...counts.map(o => o.v));
    answer = counts.filter(obj => obj.v === rank1).map(obj => obj.k + 1).sort((a,b) => a > b);

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.deepEqual(solution([1,2,3,4,5]), [1]);
    });
    it('test case 2', function () {
        assert.deepEqual(solution([1,3,2,4,2]), [1,2,3]);
    });
});