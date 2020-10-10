/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.stack);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const assert = require('assert');
describe('test pass/fail', function () {;
    it('test case 1', function () {
        minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3)
        assert.equal(minStack.getMin(), -3);
        minStack.pop();
        assert.equal(minStack.top(), 0);
        assert.equal(minStack.getMin(), -2);
    });
});