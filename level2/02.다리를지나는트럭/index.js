const solution = (bridge_length, weight, truck_weights) => {
    var answer = 0;
    let bridge = [];
    let summ_weights = 0;

    while (truck_weights.length > 0 || summ_weights > 0) {
        if (bridge.length > bridge_length - 1) {
            summ_weights -= bridge.pop(); // 다리를 다 건넌 트럭은 다리 배열에서 뱀
        }

        const truck = truck_weights.shift();
        if (truck !== undefined && summ_weights + truck <= weight) { // 새로 타려는 트럭이 다리에 올라도 최대 무게를 초과하지 않으면
            bridge.unshift(truck); // 다리배열 맨 앞에 트럭 추가
            summ_weights += truck;
        } else {
            if (truck !== undefined) truck_weights.unshift(truck);
            bridge.unshift(0);
        }

        answer ++;
    }
    
    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.equal(solution(2, 10, [7,4,5,6]), 8);
    });
    it('test case 2', function () {
        assert.equal(solution(100, 100, [10]), 101);
    });
    it('test case 3', function () {
        assert.equal(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]), 110);
    });
});