/*
FREQUENCY COUNTER

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, 
phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
*/

// O(n)
function validAnagram(str1, str2){
    const arr1 = str1.split("")
    const arr2 = str2.split("")
    if(arr1.length !== arr2.length){
        return false;
    }
    let arr1Obj = {}
    let arr2Obj = {}
    for(let val of arr1){
        arr1Obj[val] = (arr1Obj[val] || 0) + 1
    }
    for(let val of arr2){
        arr2Obj[val] = (arr2Obj[val] || 0) + 1
    }
    for(let key in arr1Obj){
        if(!(key in arr2Obj)){
            return false
        }
        if(arr2Obj[key] !== arr1Obj[key]){
            return false
        }
    }
    return true
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false 
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true