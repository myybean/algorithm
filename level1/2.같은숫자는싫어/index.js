const solution = (arr) => {
    var answer = [];
    
    let ex;
    arr.forEach(el => {
        if (ex === undefined || ex !== el) {
            answer.push(el);
        }
        ex = el;
    });
    
    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
      assert.deepEqual(solution([1,1,3,3,0,1,1]), [1,3,0,1]); // array 비교는 assert.deepEqual(a, b);
    });
    it('test case 2', function () {
      assert.deepEqual(solution([4,4,4,3,3]), [4,3]);
    });
});