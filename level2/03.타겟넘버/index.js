const solution = (numbers, target) => {
    var answer = 0;
    let results = [0];

    numbers.forEach(number => {
        let tmp_results = results.map(rs => rs + number);
        tmp_results = tmp_results.concat(results.map(rs => rs - number));
        results = tmp_results;
    });

    answer = results.filter(rs => rs === target).length;
    
    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.equal(solution([1,1,1,1,1], 3), 5);
    });
});