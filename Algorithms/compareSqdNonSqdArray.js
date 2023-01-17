/* 
FREQUENCY COUNTER

Write a function called same, which accepts two arrays. The function should return true if every value 
in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

// O(n log n)
// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     arr1.sort((a, b) => a - b)
//     arr2.sort((a, b) => a - b)
//     let isSame = true
//     for(let i = 0; i < arr1.length; i++) {
//         if(arr1[i] * arr1[i] !== arr2[i]) {
//             isSame = false
//         }
//     }
//     return isSame
// }

// O(n)
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    let arr1Obj = {}
    let arr2Obj = {}
    for(let val of arr1){
        arr1Obj[val] = (arr1Obj[val] || 0) + 1 // {1: 2, 2: 1}
    }
    for(let val of arr2){
        arr2Obj[val] = (arr2Obj[val] || 0) + 1 // {4: 2, 1: 1 }  
    }
    for(let key in arr1Obj){
        if(!(key ** 2 in arr2Obj)){
            return false
        }
        if(arr2Obj[key ** 2] !== arr1Obj[key]){
            return false
        }
    }
    return true
}

console.log(same([1,2,3], [4,1,9])) // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,1], [4,4,1])) // false (must be same frequency)