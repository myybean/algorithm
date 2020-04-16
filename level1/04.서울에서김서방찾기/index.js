const solution = (seoul) => {
    var answer = '';
    
    /* 최초풀이
    for (let i = seoul.length; i >= 0; i--) {
        if (seoul[i] === 'Kim') {
            answer = `김서방은 ${i}에 있다`;
            break;
        }
    }
    */
    
    /* indexOf */
    answer = `김서방은 ${seoul.indexOf('Kim')}에 있다`;
    
    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
      assert.equal(solution(["Jane", "Kim"]), "김서방은 1에 있다");
    });
    it('test case 2', function () {
      assert.equal(solution(["Shin", "Lee", "Choi", "Kim"]), "김서방은 3에 있다");
    });
});