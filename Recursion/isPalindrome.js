function isPalindrome(str){
    let strArr = str.length > 0 ? str.split('') : []
    function reverse(str){
        let strArr = str.length > 0 ? str.split('') : []
        return strArr.length === 0 ? '' : strArr.pop() + reverse(strArr.join(''))
    }
    const reversedStr = strArr.length === 0 ? '' : strArr.pop() + reverse(strArr.join(''))
    return reversedStr === str
}

isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false
