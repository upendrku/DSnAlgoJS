function nestedEvenSum(obj) {
    let sum = 0
    Object.keys(obj).forEach(ele => {
        if(typeof(obj[ele]) === 'number' && obj[ele] % 2 === 0) {
            sum += obj[ele]
        } else if(typeof(obj[ele]) === 'object') {
            sum += nestedEvenSum(obj[ele])
        }
    })
    return sum
}


var obj1 = {
    outer: 2, // 2
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10