/**
 * @param {number[]} nums
 * @return {boolean}
 */
export var containsDuplicate = function(nums) {
    const s = new Set(nums);
    return s.size !== nums.length;
};

const nums  =[1,2,3,1]

console.log(containsDuplicate(nums)) // Output: true