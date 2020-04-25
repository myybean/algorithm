const checkSquare = (board, point, extend) => {
    let bool = true;
    const max_r = point[0] + extend;
    const max_c = point[1] + extend;
    for (let c = point[1]; c <= max_c; c++) {
        bool = board[max_r][c] === 1;
        if (!bool) break;
    }
    if (bool) {
        for (let r = point[0]; r <= max_r; r++) {
            bool = board[r][max_c] === 1;
            if (!bool) break;
        }
    }

    return bool;
}

const solution = (board) => {
    var answer = 1;
    let maximum = 0;
    let hasSquare = false;
    
    for (let i = 0; i < board.length; i++) {
        if (board.length - i > maximum) { // 만들 수 있는 최대 정사각형의 크기가 작으면 연산하지 않음
            for (let j = 0; j < board[0].length; j++) {
                if (board[0].length - j > maximum) { // 만들 수 있는 최대 정사각형의 크기가 작으면 연산하지 않음
                    if (board[i][j] === 1) {
                        hasSquare = true;
                        const max_extension = Math.min(board.length - i, board[0].length - j); // 만들 수 있는 최대 정사각형의 크기
                        if (max_extension > maximum + 1) { // 만들 수 있는 최대 정사각형의 크기가 작으면 연산하지 않음
                            for (let t = 1; t < max_extension; t++) {
                                if (checkSquare(board, [i, j], t)) {
                                    maximum = maximum > t ? maximum : t;
                                } else break;
                            }
                        }
                    }
                }
            }
        }
    }
    
    answer = hasSquare ? Math.pow(maximum + 1, 2) : 0;

    return answer;
}

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.equal(solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]), 9);
    });
});
describe('test pass/fail', function () {
    it('test case 2', function () {
        assert.equal(solution([[0,0,1,1],[1,1,1,1]]), 4);
    });
});
describe('test pass/fail', function () {
    it('test case 3', function () {
        assert.equal(solution([[1, 1, 1, 1], [0, 1, 1, 1], [0, 1, 1, 1]]), 9);
    });
});