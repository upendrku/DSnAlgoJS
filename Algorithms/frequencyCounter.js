/* 
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(num1, num2){
    const num1Arr = String(num1).split("")
    const num2Arr = String(num2).split("")
    if(num1Arr.length !== num2Arr.length) {
        return false
    } else {
        let frequencyCounter1 = {}, frequencyCounter2 = {}
        for(let num of num1Arr) {
            frequencyCounter1[num] = frequencyCounter1[num] ? frequencyCounter1[num] + 1 : 1
        }
        for(let num of num2Arr) {
            frequencyCounter2[num] = frequencyCounter2[num] ? frequencyCounter2[num] + 1 : 1
        }
        let isSameFrequency = true
        for(let num of num1Arr) {
            if(frequencyCounter1[num] !== frequencyCounter2[num]) {
                isSameFrequency = false
            }
        }
        return isSameFrequency
    }
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false