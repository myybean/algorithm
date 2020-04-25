const getPoint = (board, r, c) => {
    return r > -1 && c > -1 && r < board.length && c < board[0].length ? board[r][c] : 0;
    // return board[r][c];
}

const getMinimumAround = (board, r, c) => {
    let up = getPoint(board, r - 1, c);
    let left = getPoint(board, r, c - 1);
    let leftup = getPoint(board, r - 1, c - 1);

    return Math.min(up, left, leftup);
}

const solution = (board) => {
    var answer = 0;
    let hasSquare = false;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 1) {
                hasSquare = true;
                board[i][j] = getMinimumAround(board, i, j) + 1;
            }
        }
    }

    let array = [];
    board.forEach(row => array = array.concat(row));
    
    answer = hasSquare ? Math.pow(array.sort((a, b) => b - a)[0], 2) : 0;

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