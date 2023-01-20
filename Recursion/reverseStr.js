function reverse(str){
    let strArr = str.length > 0 ? str.split('') : []
    return strArr.length === 0 ? '' : strArr.pop() + reverse(strArr.join(''))
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'