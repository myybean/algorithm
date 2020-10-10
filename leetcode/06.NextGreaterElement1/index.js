/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number[]}
*/
var nextGreaterElement = function(nums1, nums2) {
    let resultArray = [];
    nums1.forEach(el => {
        let rst = -1;
        for (let i = nums2.findIndex(fel => fel === el); i < nums2.length; i++) {
            if (nums2[i] > el) {
                rst = nums2[i];
                break;
            }
        }
        resultArray.push(rst);
    });

    return resultArray;
};

const assert = require('assert');
describe('test pass/fail', function () {
    it('test case 1', function () {
        assert.deepEqual(nextGreaterElement([4,1,2], [1,3,4,2]), [-1,3,-1]);
    });
});
describe('test pass/fail', function () {
    it('test case 2', function () {
        assert.deepEqual(nextGreaterElement([2,4], [1,2,3,4]), [3,-1]);
    });
});