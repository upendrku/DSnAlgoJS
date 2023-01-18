/* 
Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
*/

// O(n) using FREQUENCY COUNTER (BEST SOLUTION)
function areThereDuplicates(...args) {
    let frequencyCounter = {}
    for(let ele of args) {
        frequencyCounter[ele] = frequencyCounter[ele] ? frequencyCounter[ele] + 1 : 1
    }
    return Object.keys(frequencyCounter).some((ele) => frequencyCounter[ele] > 1)
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 