function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

// getDigit(12345, 0); // 5
// getDigit(12345, 1); // 4
// getDigit(12345, 2); // 3
// getDigit(12345, 3); // 2
// getDigit(12345, 4); // 1
// getDigit(12345, 5); // 0

function digitCount(num) {
    if(num === 0) {
        return 1
    } else {
        return Math.floor(Math.log10(Math.abs(num))) + 1
    }
}

// digitCount(232)

function mostDigits(arr) {
    let maxDigits = 0
    for(let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]))
    }
    return maxDigits
}

// mostDigits([10, 121, 3432, 12123])

function radixSort(nums) {
    let maxDigitsCount = mostDigits(nums)
    for(let k = 0; k < maxDigitsCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            if(digit !== undefined) digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets) // digitBuckets.flat()
    }
    return nums
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))