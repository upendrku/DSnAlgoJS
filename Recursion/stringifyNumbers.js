let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

function stringifyNumbers(obj) {
    let newObj = {}
    Object.keys(obj).forEach(ele => {
        if(typeof(obj[ele]) === 'number') {
            newObj[ele] = String(obj[ele])
        } else if(typeof(obj[ele]) === 'object' && !Array.isArray(obj[ele])) {
            newObj[ele] = stringifyNumbers(obj[ele])
        } else {
            newObj[ele] = obj[ele]
        }
    })
    return newObj
}

console.log(stringifyNumbers(obj))
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/