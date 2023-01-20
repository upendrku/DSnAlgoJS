function power(num, exponent){
    return exponent === 0 ? 1 : num * power(num, exponent - 1)
}

console.log(power(2,0)) // 1
console.log(power(2,2)) // 4
console.log(power(2,4)) // 16