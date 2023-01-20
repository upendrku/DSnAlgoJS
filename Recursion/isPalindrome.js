// function isPalindrome(str){
//     let strArr = str.length > 0 ? str.split('') : []
//     function reverse(str){
//         let strArr = str.length > 0 ? str.split('') : []
//         return strArr.length === 0 ? '' : strArr.pop() + reverse(strArr.join(''))
//     }
//     const reversedStr = strArr.length === 0 ? '' : strArr.pop() + reverse(strArr.join(''))
//     return reversedStr === str
// }

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false
