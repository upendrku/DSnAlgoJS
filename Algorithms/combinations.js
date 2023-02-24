/**
 * Backtracking
 * Combinations, Subsets, Permutations, Combination Sum
 */

/**
 * Backtracking Template
 * Combinations (LC77): nCk
 * @param {number} n : *Distinct* input elements [1, n]
 * @param {number} k
 * @return {number[][]} : All unordered, unique combinations of size k
 */
function combine(n, k) {
    const output = []
        ; (function backtrack(path = [], start = 1) {
            /** When valid solution is reached, 
             * copy state to new reference before adding to output */
            if (path.length === k) return output.push(path.slice())

            /** Enumerate candidates */
            for (let num = start; num <= n; ++num) {
                /** if current candidate is invalid, *prune* its subtree */
                // e.g. if (!valid(num)) continue

                /** Backtracking steps: */
                path.push(num)  // 1) Mark decision
                backtrack(path, num + 1)  // 2) Explore (dfs)
                path.pop()  // 3) Revert
            }
        })()
    return output
}


/**
 * Subsets (LC78)
 * @param {number[]} nums : *Distinct* input elements.
 * @return {number[][]} : All unordered, unique subsets (power set).
 */
function subsets(nums) {
    const output = []
        ; (function backtrack(path = [], start = 0) {
            output.push(path.slice())
            for (let i = start; i < nums.length; ++i) {
                path.push(nums[i])
                backtrack(path, i + 1)
                path.pop()
            }
        })()
    return output
}

/**
 * Subsets II (LC90) 
 * @param {number[]} nums : *Non-distinct* input elements.
 * @return {number[][]} : All unordered, unique subsets (power set).
 */
function subsetsWithDuplicates(nums) {
    const output = []
    nums.sort()
        ; (function backtrack(path = [], start = 0) {
            output.push(path.slice())
            for (let i = start; i < nums.length; ++i) {
                if (i > start && nums[i] === nums[i - 1]) continue
                path.push(nums[i])
                backtrack(path, i + 1)
                path.pop()
            }
        })()
    return output
}


/**
 * Permutations (LC46)
 * @param {number[]} nums : *Distinct* input elements.
 * @return {number[][]} : All ordered, unique permutations.
 */
function permute(nums) {
    const output = []
        ; (function backtrack(path = [], used = new Array(nums.length).fill(false)) {
            if (path.length === nums.length) return output.push(path.slice())
            for (let i = 0; i < nums.length; ++i) {
                if (used[i]) continue
                used[i] = true
                path.push(nums[i])
                backtrack(path, used)
                path.pop()
                used[i] = false
            }
        })()
    return output
}

function permuteSwap(nums) {
    const output = []
        ; (function backtrack(start = 0) {
            if (start === nums.length) return output.push(nums.slice())
            for (let i = start; i < nums.length; ++i) {
                [nums[start], nums[i]] = [nums[i], nums[start]]
                backtrack(start + 1)
                    ;[nums[start], nums[i]] = [nums[i], nums[start]]
            }
        })()
    return output
}

/**
 * Permutations II (LC47)
 * @param {number[]} nums : *Non-distinct* input elements.
 * @return {number[][]} : All ordered, unique permutations.
 */
function permuteWithDuplicates(nums) {
    const output = []
    nums.sort()
        ; (function backtrack(path = [], used = new Array(nums.length).fill(false)) {
            if (path.length === nums.length) return output.push(path.slice())
            for (let i = 0; i < nums.length; ++i) {
                if (used[i] || i > 0 && nums[i] === nums[i - 1] && used[i - 1]) continue
                used[i] = true
                path.push(nums[i])
                backtrack(path, used)
                path.pop()
                used[i] = false
            }
        })()
    return output
}

function permuteWithDuplicatesSwap(nums) {
    const output = []
        ; (function backtrack(start = 0) {
            if (start === nums.length) return output.push(nums.slice())
            const used = new Set()
            for (let i = start; i < nums.length; ++i) {
                if (used.has(nums[i])) continue
                [nums[start], nums[i]] = [nums[i], nums[start]]
                backtrack(start + 1)
                    ;[nums[start], nums[i]] = [nums[i], nums[start]]
                used.add(nums[i])
            }
        })()
    return output
}


/**
  * Combination Sum (LC39)
  * @param {number[]} nums : *Distinct* input elements. Positive integers.
  * @param {number} target : Positive integer.
  * @return {number[][]} : All unordered, unique combinations *with replacement* that sum to target.
  */
function combinationSumWithReplacement(nums, target) {
    const output = []
        ; (function backtrack(path = [], start = 0, remainder = target) {
            if (remainder === 0) return output.push(path.slice())
            for (let i = start; i < nums.length; ++i) {
                if (remainder - nums[i] >= 0) {
                    path.push(nums[i])
                    backtrack(path, i, remainder - nums[i])
                    path.pop()
                }
            }
        })()
    return output
}

/**
 * Combination Sum II (LC40)
 * @param {number[]} nums : *Non-distinct* input elements. Positive integers.
 * @param {number} target : Positive integer.
 * @return {number[][]} : All unordered, unique combinations *without replacement* that sum to target.
 */
function combinationSumWithDuplicates(nums, target) {
    const output = []
    nums.sort()
        ; (function backtrack(path = [], start = 0, remainder = target) {
            if (remainder === 0) return output.push(path.slice())
            for (let i = start; i < nums.length; ++i) {
                if (i > start && nums[i] === nums[i - 1]) continue
                if (remainder - nums[i] >= 0) {
                    path.push(nums[i])
                    backtrack(path, i + 1, remainder - nums[i])
                    path.pop()
                }
            }
        })()
    return output
}