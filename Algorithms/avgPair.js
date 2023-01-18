/* 
Write a function called averagePair. Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)

Sample Input:
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

// O(n) Multiple Pointers
function averagePair(arr, avg){
    if(arr.length === 0) {
        return false
    } else {
        let firstIndex = 0
        let lastIndex = arr.length - 1
        while(firstIndex < lastIndex) {
            if((arr[firstIndex] + arr[lastIndex]) / 2 === avg) {
                return true
            } else if((arr[firstIndex] + arr[lastIndex]) / 2 < avg) {
                firstIndex++
            } else {
                lastIndex--
            }
        }
        return false
    }
}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false