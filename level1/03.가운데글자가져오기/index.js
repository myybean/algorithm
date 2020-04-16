const solution = (s) => {
    var answer = '';
    let len = s.length;
    let center = Math.floor(len / 2);
    
    /* 최초 풀이
    if (len % 2 === 0) {
        answer = s.substring(center - 1, center + 1);
    } else {
        answer = s.substring(center, center + 1);
    }
    */
    
    /* substr */
    if (len % 2 === 0) {
        answer = s.substr(center - 1, 2);
    } else {
        answer = s.substr(center, 1);
    }
    
    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
      assert.equal(solution("abcde"), "c");
    });
    it('test case 2', function () {
      assert.equal(solution("qwer"), "we");
    });
});