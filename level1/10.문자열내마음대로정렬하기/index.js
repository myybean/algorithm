const solution = (strings, n) => {
    var answer = [];

    /* 초기 풀이 */
    const sorted = {};
    strings.filter(string => {
        const key = string.substr(n, 1);
        if (sorted.hasOwnProperty(key)) {
            sorted[key].push(string);
        } else {
            sorted[key] = [string];
        }
    });
    
    Object.keys(sorted).sort().filter(k => {
        sorted[k].sort().filter(v => answer.push(v));
    });

    /* 정렬로 풀이
    answer = strings.sort((v1, v2) => v1[n] === v2[n] ? v1.localeCompare(v2) : v1[n].localeCompare(v2[n]));
    */

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
      assert.deepEqual(solution(["sun", "bed", "car"], 1), ["car", "bed", "sun"]);
    });
    it('test case 2', function () {
      assert.deepEqual(solution(["abce", "abcd", "cdx"], 2), ["abcd", "abce", "cdx"]);
    });
});