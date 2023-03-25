/*
46. Permutations
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Using Backtracking
var permute = function (nums) {
    // global result
    const result = []

    // dfs recursive helper
    const dfs = (i, nums) => {
        // base case
        if (i === nums.length) {
            result.push(nums.slice())
            return
        }
        // dfs recursive case
        for (let j = i; j < nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            dfs(i + 1, nums)
            [hums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
    dfs(0, nums)
    return result
}

console.log(permute([1, 2, 3]))

/*
Array.prototype.flat()
The flat() method creates a new array with all sub-array elements concatenated into it 
recursively up to the specified depth.

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// Expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// Expected output: Array [0, 1, 2, Array [3, 4]]

*/