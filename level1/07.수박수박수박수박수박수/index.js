const solution = (n) => {
    var answer = '';
    
    /* # 확장성을 고려했을 때
    const palettes = ['수', '박'];
    for (let i = 0; i < n; i++) {
        answer += palettes[i % 2];
    }
    */
    
    /* 다른방법
    const palettes = '수박';
    for (let i = 0; i < Math.floor(n / 2); i++) {
        answer += palettes;
    }
    if (n % 2 === 1) answer += '수';
    */
    
    /* repeat */
    const palettes = '수박';
    answer = palettes.repeat(Math.floor(n / 2));
    if (n % 2 === 1) answer += '수';

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
      assert.equal(solution(3), "수박수");
    });
    it('test case 2', function () {
      assert.equal(solution(4), "수박수박");
    });
});