/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = (nums, target) => {

    // WORST CASE (Brute Force):
    // Time: O(n²) - Slow because of nested loops.

    /*
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
    */


    // OPTIMIZED CASE (Hash Map):
    // Time: O(n) - Fast, loops only once.

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i];

        // 1. Check memory: "Have I seen the 'need' before?"
        if (map.has(need)) {
            return [map.get(need), i];
        }

        // 2. Save current number to memory
        map.set(nums[i], i);
    }

    return [];
};

// Test Case
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
